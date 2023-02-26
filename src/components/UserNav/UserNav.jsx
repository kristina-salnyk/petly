import {Auth, Div} from '../../components/AuthNav/AuthNav.styled';
import {UserButton} from './UserNav.styled'
import {UserLink} from './UserNav.styled'
import {UserIcon} from '../icons/UserIcon';

import PropTypes from 'prop-types';

export const UserNav = ({isMenuClicked}) => {

  return (
    <>
      {!isMenuClicked && 
      <Div>
        <Auth>
          <UserButton to="/user">
            <UserIcon/>
            <UserLink  >
              Account
            </UserLink >
          </UserButton>
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