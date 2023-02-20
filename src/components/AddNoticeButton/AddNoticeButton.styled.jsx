import styled from 'styled-components';

export const Button = styled.button`
  background-color: transparent;
  border-radius: ${({ theme }) => theme.shape.borderRadius.xl}px;
  border: none;
  cursor: pointer;

  &:hover div {
    background-color: ${({ theme }) => theme.colors.hoverAccent};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    position: fixed;
    bottom: ${({ theme }) => theme.spacing[6]}px;
    right: ${({ theme }) => theme.spacing[6]}px;
    transform: translateY(-200%);
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet[0]}) {
    padding: ${({ theme }) => theme.spacing[1]}px ${({ theme }) => theme.spacing[7]}px
      ${({ theme }) => theme.spacing[1]}px 115px;
    border: 2px solid transparent;

    &:hover {
      border-color: ${({ theme }) => theme.colors.hoverAccent};
    }
  }
`;

export const IconWrap = styled.div`
  width: 80px;
  height: 80px;
  background-color: ${({ theme }) => theme.colors.accent};
  border-radius: ${({ theme }) => theme.shape.borderRadius.xl}px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[0]}px;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet[0]}) {
    position: relative;
    width: 44px;
    height: 44px;
  }
`;

export const Label = styled.span`
  font-size: ${({ theme }) => theme.typography.size.xxxs};
  font-weight: ${({ theme }) => theme.typography.weight.medium};
  color: ${({ theme }) => theme.colors.white};

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet[0]}) {
    font-size: ${({ theme }) => theme.typography.size.m};
    color: ${({ theme }) => theme.colors.black};
    white-space: nowrap;
    position: absolute;
    top: 50%;
    left: -${({ theme }) => theme.spacing[3]}px;
    transform: translate(-100%, -50%);
  }
`;
