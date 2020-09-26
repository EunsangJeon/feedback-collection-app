import { Action } from 'redux';

interface State {
  value?: string;
}

export default (state: State = {}, action: Action): State => {
  switch (action.type) {
    default:
      return state;
  }
};
