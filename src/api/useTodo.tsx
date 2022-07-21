import axios from "axios";
import { useEffect, useState } from "react"
import { useDispatch } from "react-redux";
import { updateTodoData } from "../redux/todo";
import { getToken } from "../utils/auth";
import { API_DOMAIN } from "../utils/constants";

export const useTodo = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  const getTodo = () => {
    setLoading(true);
    const headers = {'Authorization': `Bearer ${getToken()}`};
    axios.get(`${API_DOMAIN}/api/todo`, {headers})
      .then((response: any) => {
        dispatch(updateTodoData(JSON.parse(response.data.todo_json)));
      })
      .catch(() => console.log(`ERROR al cargar`))
      .finally(() => {setLoading(false)})
  }

  useEffect(() => {
    getTodo()
  }, [])

  return {getTodo, loading}
}

export const postTodo = (data: any) => {
  const headers = {
    'Authorization': `Bearer ${getToken()}`
  };
  axios.post(`${API_DOMAIN}/api/todo/`, {json_data: JSON.stringify(data)}, {headers})
    .then((response: any) => {
    })
    .catch(() => console.log(`ERROR al cargar`))
    .finally(() => {})
}