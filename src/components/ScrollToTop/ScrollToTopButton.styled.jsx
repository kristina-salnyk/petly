import styled from 'styled-components';

export const ToTopBtn = styled.button`
  position: fixed;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.accent};
  bottom: ${({ theme }) => theme.spacing[2]}px;
  right: ${({ theme }) => theme.spacing[2]}px;
  height: 50px;
  width: 50px;
  font-size: ${({ theme }) => theme.typography.size.xxxxl};
  font-weight: ${({ theme }) => theme.typography.weight.bold};
  border: 2px solid ${({ theme }) => theme.colors.accent};
  border-radius: ${({ theme }) => theme.shape.borderRadius.xl}px;
  background-color: ${({ theme }) => theme.colors.button};
  box-shadow: ${({ theme }) => theme.shadows[0]};

  :hover {
    background: ${({ theme }) => theme.colors.hoverAccent};
    color: ${({ theme }) => theme.colors.dark};
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet[0]}) {
    bottom: ${({ theme }) => theme.spacing[3]}px;
    right: ${({ theme }) => theme.spacing[3]}px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktopMin}) {
    bottom: ${({ theme }) => theme.spacing[5]}px;
    right: ${({ theme }) => theme.spacing[5]}px;
  }
`;
