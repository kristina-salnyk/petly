import {Login} from '../../components/AuthNav/AuthNav.styled';
import { NavLink } from 'react-router-dom';

export const UserNav = () => {
  return (
    <div>
      <ul>
        <Login>
          <NavLink to="/user">
              User
          </NavLink>
        </Login>
      </ul>
    </div>
    
  ) 
};

export default UserNav;