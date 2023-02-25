import {Login, Register,Auth, StyledLogin, StyledRegister } from './AuthNav.styled';
import PropTypes from 'prop-types';


export const AuthNav = ({isMenuClicked}) => {
  
  return (
    <>
      {!isMenuClicked &&
      
        <Auth>
          <Login to="/login">
            <StyledLogin>
              Login
            </StyledLogin>
          </Login>
          <Register to="/register">
            <StyledRegister  >
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
