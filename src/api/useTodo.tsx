import axios from 'axios';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../redux/configureStore';
import { setLoading, updateTodoData } from '../redux/todo';
import { getToken } from '../utils/auth';
import { API_DOMAIN } from '../utils/constants';

export const useTodo = () => {
  const dispatch = useDispatch();
  const { loading } = useSelector((s: RootState) => s.todo);

  const getTodo = () => {
    if (loading) return;
    dispatch(setLoading(true));
    const headers = { Authorization: `Bearer ${getToken()}` };
    axios
      .get(`${API_DOMAIN}/api/todo/`, { headers })
      .then((response: any) => {
        dispatch(updateTodoData(JSON.parse(response.data.todo_json)));
      })
      .catch(() => console.log(`ERROR al cargar`))
      .finally(() => {
        dispatch(setLoading(false));
      });
  };

  return { getTodo, loading };
};

export const postTodo = (data: any) => {
  const headers = {
    Authorization: `Bearer ${getToken()}`,
  };
  axios
    .post(
      `${API_DOMAIN}/api/todo/`,
      { json_data: JSON.stringify(data) },
      { headers },
    )
    .then((response: any) => {})
    .catch(() => console.log(`ERROR al cargar`))
    .finally(() => {});
};
