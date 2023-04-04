import { useNavigate } from 'react-router-dom';

function TopFixedBar() {
  const navigate = useNavigate();

  const moveToHomePage = () => navigate('/');
  const moveToSignUpPage = () => navigate('/signup');
  const moveToSignInPage = () => navigate('/signin');

  return (
    <div className="flex px-[4%] py-[1.5%] border-b-2 border-lightGray justify-between">
      <button onClick={moveToHomePage}>홈</button>
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
