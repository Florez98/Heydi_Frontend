import PropTypes from 'prop-types';

const namespace = 'button';

const Button = ({ text, className, onClick }) => {
  return (
    <button className={`${namespace} ${className}`} onClick={() => onClick(text)}>
      {text}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Button;
