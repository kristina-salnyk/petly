import {Login, Auth, Div} from '../../components/AuthNav/AuthNav.styled';
import {UserLink} from './UserNav.styled'
import {UserIcon} from '../icons/UserIcon';

import PropTypes from 'prop-types';

export const UserNav = ({isMenuClicked}) => {

  return (
    <>
      {!isMenuClicked && 
      <Div>
        <Auth>
          <Login>
            <UserIcon/>
            <UserLink to="/user">
              Account
            </UserLink >
          </Login>
        </Auth>
      </Div> 
      }
    </>
  ) 
};

export default UserNav;

UserNav.propTypes = {
  isMenuClicked: PropTypes.bool.isRequired,
  
};