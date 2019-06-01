import { actionTypes } from './action';

export const initstate = {
  count: 0,
};

export function rootReducer(state = initstate, action) {
  switch (action.type) {
    case actionTypes.FAILURE:
      return {
        ...state,
        ...{error: action.error}
      };

    case actionTypes.INCREMENT:
      return {
        ...state,
        ...{count: state.count + 1}
      };

    case actionTypes.DECREMENT:
      return {
        ...state,
        ...{count: state.count - 1}
      };

    case actionTypes.RESET:
      return {
        ...state,
        ...{count: initstate.count}
      };

    default:
      return state;
  }
}
