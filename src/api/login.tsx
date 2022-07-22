import axios from 'axios';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setActiveUser } from '../redux/auth';
import { setToken, setRefresh } from '../utils/auth';
import { API_DOMAIN } from '../utils/constants';

interface LoginType {
  username: string;
  password: string;
}

export const useLogin = () => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const login = (data: LoginType) => {
    setLoading(true);
    return axios
      .post(`${API_DOMAIN}/api/auth/login/`, data)
      .then((response: any) => {
        setToken(response.data.access);
        setRefresh(response.data.refresh);
        dispatch(setActiveUser(true));
        return response;
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const login2 = async (data: LoginType) => {
    setLoading(true);
    try {
      const res = await fetch(`${API_DOMAIN}/api/auth/login/`, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: { 'Content-Type': 'application/json' },
      });
      const response: any = await res.json();
      setToken(response.access);
      setRefresh(response.refresh);
      dispatch(setActiveUser(true));
      return true;
    } catch (error) {
      return false;
    }
  };

  return { login, login2, loading };
};

export const login = (data: LoginType) =>
  axios.post(`${API_DOMAIN}/api/auth/login/`, data).then((response: any) => {
    setToken(response.data.access);
    return response;
  });
