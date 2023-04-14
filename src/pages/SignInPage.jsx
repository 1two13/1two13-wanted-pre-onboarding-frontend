import UserAccessForm from '../components/common/UserAccessForm';
import { SIGN_IN } from '../static/constants';

function SignInPage() {
  return <UserAccessForm title={SIGN_IN} buttonId={'signin-button'} buttonName={SIGN_IN} />;
}

export default SignInPage;
