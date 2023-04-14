import { useNavigate } from 'react-router-dom';
import { SIGN_UP, SIGN_IN } from '../../static/constants';

function TopFixedBar() {
  const access_token = localStorage.getItem('access_token');
  const navigate = useNavigate();

  const moveToTodoPage = () => {
    if (access_token) navigate('/todo');
    else navigate('/signin');
  };
  const moveToSignUpPage = () => {
    if (access_token) navigate('/todo');
    else navigate('/signup');
  };
  const moveToSignInPage = () => {
    if (access_token) navigate('/todo');
    else navigate('/signin');
  };

  return (
    <div className="flex px-[4%] py-[1.5%] border-b-2 border-lightGray justify-between">
      <div>
        <button onClick={moveToTodoPage}>Todo</button>
      </div>
      <div>
        <button onClick={moveToSignUpPage} className="mr-[15px]">
          {SIGN_UP}
        </button>
        <button onClick={moveToSignInPage}>{SIGN_IN}</button>
      </div>
    </div>
  );
}

export default TopFixedBar;
