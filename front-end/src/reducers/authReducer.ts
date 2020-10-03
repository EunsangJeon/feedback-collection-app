import { AnyAction } from 'redux';

import { FETCH_USER } from '../actions/types';

export default (state = null, action: AnyAction): unknown | null => {
  switch (action.type) {
    case FETCH_USER:
      return action.payload;
    default:
      return state;
  }
};
