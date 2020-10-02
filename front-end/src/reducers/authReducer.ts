import { AnyAction } from 'redux';

import { FETCH_USER } from '../actions/types';

interface IState {
  value?: unknown;
}

export default (
  state: IState | null = null,
  action: AnyAction,
): IState | null => {
  switch (action.type) {
    case FETCH_USER:
      return action.payload;
    default:
      return state;
  }
};
