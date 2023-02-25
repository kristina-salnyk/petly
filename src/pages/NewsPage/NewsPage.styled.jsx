import styled from 'styled-components';

export const Container = styled.div`
    margin: auto;

    @media (min-width: ${({ theme }) => theme.breakpoints.desktopMax}){
        max-width: 1600px;
  };
`;

export const TitleNews = styled.h2`
  display: flex;
  justify-content: center;
  margin-top: ${({ theme }) => theme.spacing[9]}px;
  align-items: center;
  font-weight: ${({ theme }) => theme.typography.weight.bold};
  font-size: ${({ theme }) => theme.typography.size.l};
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet[0]}) {
    font-size: ${({ theme }) => theme.typography.size.xxxxl};
    margin-top: ${({ theme }) => theme.spacing[10]}px;
  }  
  
`;