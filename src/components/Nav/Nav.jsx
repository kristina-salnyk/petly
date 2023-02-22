import { Ul, Find, News, Friends, StyledNews, StyledFind, StyledFriends } from './Nav.styled';

export const Nav = () => {
  return (
    <>
      <Ul>
        <News>
          <StyledNews to="/news">News</StyledNews>
        </News>
        <Find>
          <StyledFind to="/notices/sell">Find pet</StyledFind>
        </Find>
        <Friends>
          <StyledFriends to="/friends">Our friends</StyledFriends>
        </Friends>
      </Ul>
    </>
  );
};

export default Nav;
