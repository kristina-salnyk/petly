import { useDispatch } from 'react-redux';
import { logOut } from '../../redux/auth/operations';
// import { LogoutIcon } from '../../components/icons/LogoutIcon';
import { LogoutBtn, LogoutSpan } from './Logout.styled';
import { ReactComponent as LogoutIcon } from '../../icons/logout.svg';

export const Logout = () => {
  const dispatch = useDispatch();

  return (
    <>
      <LogoutBtn type="button" onClick={() => dispatch(logOut())}>
        <LogoutIcon />
        <LogoutSpan>Log Out</LogoutSpan>
      </LogoutBtn>
    </>
  );
};
