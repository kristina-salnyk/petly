import styled from 'styled-components';

export const Container = styled.div`
  padding: 0 ${({ theme }) => theme.spacing[5]}px;
  margin: auto;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    max-width: ${({ theme }) => theme.breakpoints.mobile};
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet[0]}) {
    padding: 0 ${({ theme }) => theme.spacing[8]}px;
    width: ${({ theme }) => theme.breakpoints.tablet[0]};
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    padding: 0 ${({ theme }) => theme.spacing[4]}px;
    width: ${({ theme }) => theme.breakpoints.desktop};
  }

`;

export const ContentWrap = styled.div`
  padding: ${({ theme }) => theme.spacing[7]}px 0 100px;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet[0]}) {
    padding: ${({ theme }) => theme.spacing[9]}px 0 100px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    padding-bottom: 200px;
  }
`;

export const PageTitle = styled.h2`
  font-size: ${({ theme }) => theme.typography.size.l};
  font-weight: ${({ theme }) => theme.typography.weight.bold};
  color: ${({ theme }) => theme.colors.black};
  text-align: center;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet[0]}) {
    font-size: ${({ theme }) => theme.typography.size.xxxxl};
  }
`;

export const TopPanel = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Button = styled.button`
  width: 50px;
  hight: 30px;
`;

