import { URL } from '../static/constants';

const getTodosApi = () => {
  const access_token = localStorage.getItem('access_token');

  return fetch(`${URL}/todos`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });
};

export default getTodosApi;
