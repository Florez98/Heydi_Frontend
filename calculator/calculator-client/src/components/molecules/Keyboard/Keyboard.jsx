import PropTypes from 'prop-types';
import Button from '../../atoms/Button/Button';
import './styles.scss';
import { useEffect, useState } from 'react';

const namespace = 'keyboard';

const Keyboard = ({ onClick }) => {
  const [keyBoards, setkeyBoards] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3006/calculator')
      .then((raw) => raw.json())
      .then((data) => {
        console.log(data);
        setkeyBoards(data);
      });
  }, []);

  const renderKeboards = () => {
    
    return keyBoards.map(({ text, classname }, index) => {
      return <Button key={`button-${index}-${text}`} text={text} className={classname} onClick={onClick} />;
    });
  };

  return <article className={namespace}>{keyBoards.length ? renderKeboards() : 'Server not available'}</article>;
};

Keyboard.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default Keyboard;
