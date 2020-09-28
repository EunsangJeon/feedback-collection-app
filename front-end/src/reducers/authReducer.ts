import { Action } from 'redux';

interface IState {
  value?: string;
}

export default (state: IState = {}, action: Action): IState => {
  console.log(action);
  switch (action.type) {
    default:
      return state;
  }
};
