import { useState } from 'react';

function UserAccessForm({ title, buttonId, buttonName }) {
  const [emailMessage, setEmailMessage] = useState('이메일에는 @가 포함되어야 합니다.');
  const [passwordMessage, setPasswordMessage] = useState('비밀번호는 8자 이상이어야 합니다.');
  const [isEmail, setIsEmail] = useState(false);
  const [isPassword, setIsPassword] = useState(false);

  const onChangeEmailHandler = (e) => {
    if (e.target.value.includes('@')) {
      setEmailMessage('사용가능한 이메일입니다.');
      setIsEmail(true);
    }
  };
  const onChangePasswordHandler = (e) => {
    if (e.target.value.length >= 8) {
      setPasswordMessage('사용가능한 비밀번호입니다.');
      setIsPassword(true);
    }
  };

  return (
    <div className="flex flex-col w-[100%] p-[5%] items-center">
      <h1 className="mb-[3%] font-bold text-5xl">{title}</h1>
      <form className="flex flex-col justify-between w-[40%] h-[28vh]">
        <div>
          <input
            data-testid="email-input"
            placeholder="이메일"
            className="w-[100%] p-[1.5%] border-2 border-lightGray rounded-lg"
            onChange={onChangeEmailHandler}
          />
          <div className="mb-[2%]">{emailMessage}</div>
          <input
            data-testid="password-input"
            placeholder="비밀번호"
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
