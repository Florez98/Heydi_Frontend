export const actions = {
  SET_BOARD: (state, newText) => {
    let board = ''
    if (newText === 'C') {
      board = '';
      state.result = 0;
    } else {
      board = state.board + newText;
    }
    
    return { ...state, board };
  },
  SET_OPERATION: (state, newOperation) => {
    const operations = [
      { text: '+', type: 'PLUS' },
      { text: '-', type: 'MINUS' },
      { text: '×', type: 'MULTIPLY' },
      { text: '÷', type: 'DIVISION' },
      { text: 'C', type: 'CLEAR' },
      { text: '%', type: 'MODULE' },
    ];

    const operation = operations.find(({ text }) => text === newOperation);

    if (operation) {
      return { ...state, operation };
    }

    return { ...state };
  },
  PLUS: (state, { num1, num2 }) => {
    const result = num1 + num2;

    return { ...state, result };
  },
  MINUS: (state, { num1, num2 }) => {
    const result = num1 - num2;

    return { ...state, result };
  },
  MULTIPLY: (state, { num1, num2 }) => {
    console.log(num1 * num2);
    const result = num1 * num2;

    return { ...state, result };
  },
  MODULE: (state, { num1, num2 }) => {
    const result = num1 % num2;

    return { ...state, result };
  },
  DIVISION: (state, { num1, num2 }) => {
    const result = num1 / num2;

    return { ...state, result };
  },
  CLEAR: (state, { num1, num2 }) => {
    const result = 0;

    return { ...state, result };
  },
};

export const operate = ({ board, operation }, newText, dispatch) => {
  if (operation.type && operation.text && newText === '=') {
    const [leftResult, rightResult] = board.split(operation.text);
    const leftNumber = Number(leftResult);
    const rightNumber = Number(rightResult);
    const payload = {
      num1: leftNumber,
      num2: rightNumber,
    };

    dispatch({ type: operation.type, payload });
  }
};
