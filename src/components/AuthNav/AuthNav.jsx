import { Auth, LinkStyled } from './AuthNav.styled';
import PropTypes from 'prop-types';

export const AuthNav = ({ isMenuClicked }) => {
  return (
    <>
      {!isMenuClicked && (
        <Auth>
          <LinkStyled to="/login">Login</LinkStyled>
          <LinkStyled to="/register">Registration</LinkStyled>
        </Auth>
      )}
    </>
  );
};

AuthNav.propTypes = {
  isMenuClicked: PropTypes.bool.isRequired,
};
export default AuthNav;
