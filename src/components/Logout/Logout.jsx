// import { LogoutIcon } from '../../components/icons/LogoutIcon';
import { LogoutBtn, LogoutSpan } from './Logout.styled';
import { ReactComponent as LogoutIcon } from '../../icons/logout.svg';
export const Logout = () => {
  return (
    <>
      <LogoutBtn type="button">
        <LogoutIcon />
        <LogoutSpan>Log Out</LogoutSpan>
      </LogoutBtn>
    </>
  );
};
