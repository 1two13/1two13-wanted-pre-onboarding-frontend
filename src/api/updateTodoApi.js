import { URL } from '../static/constants';

const updateTodoApi = (id, todo, isCompleted) => {
  const access_token = localStorage.getItem('access_token');

  return fetch(`${URL}/todos/${id}`, {
    method: 'PUT',
    headers: {
      Authorization: `Bearer ${access_token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      todo,
      isCompleted,
    }),
  });
};

export default updateTodoApi;
