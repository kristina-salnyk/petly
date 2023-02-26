import { LinkStyled, NavItem, Ul } from './Nav.styled';

export const Nav = () => {
  return (
    <>
      <Ul>
        <NavItem>
          <LinkStyled to="/news">News</LinkStyled>
        </NavItem>
        <NavItem>
          <LinkStyled to="/notices">Find pet</LinkStyled>
        </NavItem>
        <NavItem>
          <LinkStyled to="/friends">Our friends</LinkStyled>
        </NavItem>
      </Ul>
    </>
  );
};

export default Nav;
