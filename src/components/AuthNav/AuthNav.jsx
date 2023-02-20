import { Auth, Div, Login, Register, StyledLogin, StyledRegister } from './AuthNav.styled';
import PropTypes from 'prop-types';

export const AuthNav = ({ isMenuClicked }) => {
  // console.log(isMenuClicked)
  return (
    <>
      {!isMenuClicked && (
        <Div>
          <Auth>
            <Login>
              <StyledLogin to="/login">Login</StyledLogin>
            </Login>
            <Register>
              <StyledRegister to="/register">Registration</StyledRegister>
            </Register>
          </Auth>
        </Div>
      )}
    </>
  );
};

AuthNav.propTypes = {
  isMenuClicked: PropTypes.bool.isRequired,
};
export default AuthNav;
