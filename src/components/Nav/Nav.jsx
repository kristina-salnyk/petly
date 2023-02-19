import {Ul, Find, News, Friends, StyledNews, StyledFind, StyledFriends} from './Nav.styled';
// import { NavLink } from 'react-router-dom';

export const Nav = () => {

  return (
    <>
      <Ul>
        <News>
          <StyledNews to="/news">
              News
          </StyledNews>
        </News>
        <Find>
          <StyledFind to="/notices">
              Find pet
          </StyledFind>
        </Find>
        <Friends>
          <StyledFriends to="/friends">
              Our friends
          </StyledFriends>
        </Friends>
      </Ul>
    </>

  )

};

export default Nav;