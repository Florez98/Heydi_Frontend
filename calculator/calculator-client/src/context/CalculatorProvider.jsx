import { createContext, useState, useReducer } from 'react';
import { reducer, initState } from './reducer';

export const CalculatorContext = createContext();
const Provider = CalculatorContext.Provider;

export const CalculatorProvider = (props) => {
  const { children } = props;
  const [counter, setCounter] = useState(0);
  const [state, dispatch] = useReducer(reducer, initState);

  const value = {
    counter,
    setCounter,
    state,
    dispatch,
  };

  return <Provider value={value}>{children}</Provider>;
};
