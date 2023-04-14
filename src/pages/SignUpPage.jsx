import UserAccessForm from '../components/common/UserAccessForm';
import { SIGN_UP } from '../static/constants';

function SignUpPage() {
  return <UserAccessForm title={SIGN_UP} buttonId={'signup-button'} buttonName={SIGN_UP} />;
}

export default SignUpPage;
