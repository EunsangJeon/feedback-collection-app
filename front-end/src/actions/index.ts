import axios from 'axios';
import { FETCH_USER } from './types';
import { BACKEND_URL } from '../config/keys';
import { Dispatch } from 'react';
import { AnyAction } from 'redux';

export const fetchUser = () => (dispatch: Dispatch<AnyAction>): void => {
  axios.get(`${BACKEND_URL}/api/current-user`, { withCredentials: true }).then((res) => {
    dispatch({ type: FETCH_USER, payload: res });
  });
};
