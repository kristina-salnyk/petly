import styled from 'styled-components';

export const ListNews = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  list-style: none;
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet[0]}) {
    padding-top: ${({ theme }) => theme.spacing[5]}px;
  }
`;

export const ItemNews = styled.li`
  flex-basis: calc(100% / 1 - 40px);
  margin: 20px;
  display: flex;
  justify-content: center;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet[0]}) {
    flex-basis: calc(100% / 2 - 32px);
    margin: 16px;
    margin-bottom: 60px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktopMin}) {
    flex-basis: calc(100% / 3 - 32px);
    margin: 16px;
  }
`;

export const ConteinerNews = styled.div`
  margin-top: 40px;
  margin: 0 auto;
`;

export const ErrorTitle = styled.h3`
  text-align: center;
`;