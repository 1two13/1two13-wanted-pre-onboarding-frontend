import { useState } from 'react';
import { useNavigate, Navigate } from 'react-router-dom';

import signApi from '../../api/signApi';
import {
  EMAIL_REQUIREMENT,
  PASSWORD_REQUIREMENT,
  AVAILABLE_EMAIL,
  AVAILABLE_PASSWORD,
  SIGN_UP,
  EMAIL,
  PASSWORD,
} from '../../static/constants';

function UserAccessForm({ title, buttonId, buttonName }) {
  const access_token = localStorage.getItem('access_token');
  const navigate = useNavigate();
  const [emailMessage, setEmailMessage] = useState(EMAIL_REQUIREMENT);
  const [passwordMessage, setPasswordMessage] = useState(PASSWORD_REQUIREMENT);
  const [isEmail, setIsEmail] = useState(false);
  const [isPassword, setIsPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  if (access_token) {
    return <Navigate to="/todo" />;
  }

  const onChangeEmailHandler = (e) => {
    if (e.target.value.includes('@')) {
      setEmail(e.target.value);
      setIsEmail(true);
      setEmailMessage(AVAILABLE_EMAIL);
    } else setIsEmail(false);
  };

  const onChangePasswordHandler = (e) => {
    if (e.target.value.length >= 8) {
      setPassword(e.target.value);
      setIsPassword(true);
      setPasswordMessage(AVAILABLE_PASSWORD);
    } else setIsPassword(false);
  };

  const moveToSignInPage = (e) => {
    e.preventDefault();

    signApi('/auth/signup', email, password)
      .then((response) => {
        if (response.ok) navigate('/signin');
        return response.json();
      })
      .then((result) => window.alert(result.message));
  };

  const moveToTodoPage = (e) => {
    e.preventDefault();

    signApi('/auth/signin', email, password)
      .then((response) => {
        if (response.ok) navigate('/todo');
        return response.json();
      })
      .then((response) => {
        if (response['access_token']) {
          localStorage.setItem('access_token', response['access_token']);
          navigate('/todo');
        } else window.alert(response.message);
      });
  };

  return (
    <div className="flex flex-col w-[100%] p-[5%] items-center">
      <h1 className="mb-[3%] font-bold text-5xl">{title}</h1>
      <form
        onSubmit={buttonName === SIGN_UP ? moveToSignInPage : moveToTodoPage}
        className="flex flex-col justify-between w-[40%] h-[28vh]"
      >
        <div>
          <input
            data-testid="email-input"
            placeholder={EMAIL}
            className="w-[100%] p-[1.5%] border-2 border-lightGray rounded-lg"
            onChange={onChangeEmailHandler}
          />
          <div className="mb-[2%]">{emailMessage}</div>
          <input
            data-testid="password-input"
            type="password"
            placeholder={PASSWORD}
            className="w-[100%] p-[1.5%] border-2 border-lightGray rounded-lg"
            onChange={onChangePasswordHandler}
          />
          <div>{passwordMessage}</div>
        </div>
        <button
          data-testid={buttonId}
          className={
            isEmail && isPassword
              ? 'w-[100%] p-[1.5%] border-2 border-[black] rounded-lg bg-[black] text-[white]'
              : 'w-[100%] p-[1.5%] border-2 border-lightGray rounded-lg bg-lightGray'
          }
          disabled={!(isEmail && isPassword)}
        >
          {buttonName}
        </button>
      </form>
    </div>
  );
}

export default UserAccessForm;
