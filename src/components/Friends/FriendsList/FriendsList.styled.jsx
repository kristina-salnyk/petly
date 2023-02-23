import styled from 'styled-components';

export const TitleFriends = styled.h1`
  font-weight: 700;
  font-size: 24px;
  line-height: 33px;
  text-align: center;
  color: black;
  margin-top: 47px;
  @media screen and (min-width: 768px) {
    font-size: 48px;
    line-height: 66px;
    margin-top: 94px;
  }
  @media screen and (min-width: 1280px) {
    margin-top: 72px;
  } 
  
`;

export const List = styled.ul`
  display: grid;
  margin-top: 40px;
  @media screen and (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
    margin-top: 45px;
    margin-right: -32px;
    margin-bottom: -32px;
  }
  @media screen and (min-width: 1280px) {
    grid-template-columns: 1fr 1fr 1fr;
    margin-top: 60px;
  }
`;