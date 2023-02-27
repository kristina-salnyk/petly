import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Ul = styled.ul`
  list-style: none;
  display: flex;
  gap: 80px;
  white-space: nowrap;

  @media (max-width: 1279px) {
    display: none;
    margin: 0;
    padding: 0;
  }
`;
export const NavItem = styled.li`
  font-weight: ${({ theme }) => theme.typography.weight.medium};
  font-size: ${({ theme }) => theme.typography.size.m};
`;

export const LinkStyled = styled(NavLink)`
  color: ${({ theme }) => theme.colors.text.nav};

  &.active {
    color: ${({ theme }) => theme.colors.accent};
  }
`;
