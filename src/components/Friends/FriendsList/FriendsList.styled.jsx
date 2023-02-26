import styled from 'styled-components';

export const TitleFriends = styled.h2`
  font-weight: ${({ theme }) => theme.typography.weight.bold};
  font-size: ${({ theme }) => theme.typography.size.l};
  text-align: center;
  color: black;
  margin-top: 40px;
  margin-bottom: 28px;
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet[0]}) {
    font-size: ${({ theme }) => theme.typography.size.xxxxl};
    margin-top: 88px;
    margin-bottom: 40px;
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.desktopMin}) {
    margin-top: 60px;
    margin-bottom: 60px;
  } 
`;

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  list-style: none; 

    @media (min-width: ${({ theme }) => theme.breakpoints.tablet[0]}){
      padding-top: ${({ theme }) => theme.spacing[5]}px;
    }
`;

export const ErrorTitle = styled.h3`
  text-align: center;
`;