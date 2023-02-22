import styled from 'styled-components';

export const Form = styled.form`
  padding: ${({ theme }) => theme.spacing[9]}px 0;
  margin: 0 auto;
  width: 100%;
  max-width: 600px;
`;

export const Input = styled.input`
  padding: ${({ theme }) => theme.spacing[1]}px ${({ theme }) => theme.spacing[9]}px
    ${({ theme }) => theme.spacing[2]}px ${({ theme }) => theme.spacing[3]}px;
  width: 100%;
  font-size: ${({ theme }) => theme.typography.size.xxs};
  font-weight: ${({ theme }) => theme.typography.weight.medium};
  color: ${({ theme }) => theme.colors.text.placeholder};
  box-shadow: ${({ theme }) => theme.shadows[0]};
  border-radius: ${({ theme }) => theme.shape.borderRadius.l}px;
  border: 1px solid transparent;
  outline: none;

  &:focus {
    border-color: ${({ theme }) => theme.colors.border};
  }

  &::-webkit-search-decoration,
  &::-webkit-search-cancel-button,
  &::-webkit-search-results-button,
  &::-webkit-search-results-decoration {
    display: none;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet[0]}) {
    padding: ${({ theme }) => theme.spacing[2]}px ${({ theme }) => theme.spacing[10]}px
      ${({ theme }) => theme.spacing[2]}px ${({ theme }) => theme.spacing[5]}px;
    font-size: ${({ theme }) => theme.typography.size.m};
  }
`;

export const InputWrap = styled.div`
  position: relative;
  display: inline-block;
  width: 100%;
`;

export const InputSearchControl = styled.button`
  padding: 0 ${({ theme }) => theme.spacing[3]}px;
  height: 100%;
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  align-items: center;
  background-color: transparent;
  border: none;
  cursor: pointer;

  &:hover {
    opacity: ${({ theme }) => theme.shape.opacity};
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet[0]}) {
    padding: 0 ${({ theme }) => theme.spacing[5]}px;
  }
`;
