import { useNavigate } from 'react-router-dom';

function TopFixedBar() {
  const navigate = useNavigate();

  const moveToHomePage = () => navigate('/');
  const moveToTodoPage = () => {
    if (localStorage.getItem('access_token')) navigate('/todo');
    else navigate('/signin');
  };
  const moveToSignUpPage = () => {
    if (localStorage.getItem('access_token')) navigate('/todo');
    else navigate('/signup');
  };
  const moveToSignInPage = () => {
    if (localStorage.getItem('access_token')) navigate('/todo');
    else navigate('/signin');
  };

  return (
    <div className="flex px-[4%] py-[1.5%] border-b-2 border-lightGray justify-between">
      <div>
        <button onClick={moveToHomePage} className="mr-[15px]">
          홈
        </button>
        <button onClick={moveToTodoPage}>Todo</button>
      </div>
      <div>
        <button onClick={moveToSignUpPage} className="mr-[15px]">
          회원가입
        </button>
        <button onClick={moveToSignInPage}>로그인</button>
      </div>
    </div>
  );
}

export default TopFixedBar;
