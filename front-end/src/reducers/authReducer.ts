import { AnyAction } from 'redux';

import { FETCH_USER, CLEAR_USER } from '../actions/types';

export default (state = null, action: AnyAction): unknown | null => {
  switch (action.type) {
    case FETCH_USER:
      return action.payload;
    case CLEAR_USER:
      return null;
    default:
      return state;
  }
};
