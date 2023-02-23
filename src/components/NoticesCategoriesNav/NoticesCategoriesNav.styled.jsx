import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Categories = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing[3]}px;
`;

export const Category = styled(NavLink)`
  padding: ${({ theme }) => theme.spacing[1]}px ${({ theme }) => theme.spacing[7]}px;
  font-size: ${({ theme }) => theme.typography.size.xs};
  font-weight: ${({ theme }) => theme.typography.weight.medium};
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.black};
  border: 2px solid ${({ theme }) => theme.colors.accent};
  border-radius: ${({ theme }) => theme.shape.borderRadius.l}px;

  &.active {
    background-color: ${({ theme }) => theme.colors.accent};
    color: ${({ theme }) => theme.colors.white};

    &:hover {
      background-color: ${({ theme }) => theme.colors.hoverAccent};
    }
  }

  &:hover {
    border-color: ${({ theme }) => theme.colors.hoverAccent};
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet[0]}) {
    padding: ${({ theme }) => theme.spacing[2]}px ${({ theme }) => theme.spacing[7]}px;
    font-size: ${({ theme }) => theme.typography.size.m};
  }
`;
