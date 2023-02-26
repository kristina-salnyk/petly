import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const NavItem = styled.li`
  font-weight: ${({ theme }) => theme.typography.weight.medium};
  font-size: ${({ theme }) => theme.typography.size.m};
  margin-bottom: 40px;
  text-align: center;
`;

export const LinkStyled = styled(NavLink)`
  font-weight: 500;
  font-size: 32px;
  color: ${({ theme }) => theme.colors.text.nav};

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet[0]}) {
    font-size: 48px;
  }

  &.active {
    color: ${({ theme }) => theme.colors.accent};
    text-decoration: underline;
    text-decoration-thickness: 1px;
  }
`;
