import { URL } from '../static/constants';

const signApi = (auth, email, password) => {
  return fetch(URL + auth, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email,
      password,
    }),
  });
};

export default signApi;
