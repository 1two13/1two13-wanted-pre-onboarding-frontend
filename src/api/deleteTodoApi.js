import { URL } from '../static/constants';

const deleteTodoApi = (id) => {
  const access_token = localStorage.getItem('access_token');

  return fetch(`${URL}/todos/${id}`, {
    method: 'DELETE',
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });
};

export default deleteTodoApi;
