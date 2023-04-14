import { URL } from '../static/constants';

const createTodoApi = (todo) => {
  const access_token = localStorage.getItem('access_token');

  return fetch(`${URL}/todos`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${access_token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      todo,
    }),
  });
};

export default createTodoApi;
