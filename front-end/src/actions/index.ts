import axios from 'axios';
import { FETCH_USER } from './types';
import { BACKEND_URL } from '../config/keys';
import { Dispatch } from 'react';
import { AnyAction } from 'redux';

export const fetchUser = () => async (
  dispatch: Dispatch<AnyAction>,
): Promise<void> => {
  const res = await axios.get(`${BACKEND_URL}/api/current-user`, {
    withCredentials: true,
  });

  dispatch({ type: FETCH_USER, payload: res.data });
};

export const handlePaymentToken = (token: string) => async (
  dispatch: Dispatch<AnyAction>,
): Promise<void> => {
  const res = await axios.post(`${BACKEND_URL}/api/stripe`, token, {
    withCredentials: true,
  });

  dispatch({ type: FETCH_USER, payload: res.data });
};
