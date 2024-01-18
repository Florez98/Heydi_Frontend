import { useContext, useReducer } from 'react';

import Board from '../../molecules/Board/Board';
import Keyboard from '../../molecules/Keyboard/Keyboard';
import './styles.scss';
import { operate } from '../../../context/actions';
import { CalculatorContext } from '../../../context/CalculatorProvider';

const namespace = 'calculator';

const Calculator = () => {
  const { counter, setCounter, state, dispatch } = useContext(CalculatorContext);

  const handlerButton = (newText) => {
    operate(state, newText, dispatch);
    dispatch({ type: 'SET_OPERATION', payload: newText });
    dispatch({ type: 'SET_BOARD', payload: newText });

    setCounter(counter + 1);
  };

  return (
    <section className={namespace}>
      <Board />
      <Keyboard onClick={handlerButton} />
    </section>
  );
};

export default Calculator;
