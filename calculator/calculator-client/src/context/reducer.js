import { actions } from './actions';

export const initState = { board: '', operation: { text: '', type: '' }, result: 0 };

export const reducer = (state, action) => {
  const { type, payload } = action;
  const method = actions[type];

  if (typeof method === 'function') {
    return method(state, payload);
  }

  return state;
};
