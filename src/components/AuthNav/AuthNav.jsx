import {Login, Register,Auth, StyledLogin, StyledRegister } from './AuthNav.styled';
import PropTypes from 'prop-types';


export const AuthNav = ({isMenuClicked}) => {
  
  return (
    <>
      {!isMenuClicked &&
      
        <Auth>
          <Login>
            <StyledLogin to="/login">
              Login
            </StyledLogin>
          </Login>
          <Register>
            <StyledRegister to="/register">
            Registration
            </StyledRegister>
          </Register>
        </Auth>
        
      }
    </>
  );
};

AuthNav.propTypes = {
  isMenuClicked: PropTypes.bool.isRequired,
};
export default AuthNav;
