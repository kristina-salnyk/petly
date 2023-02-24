import styled from 'styled-components';
export const Wrapper = styled.div`
  display: block;
  margin-top: 60px;

  @media screen and (min-width: 768px) {
    margin-top: 90px;
  }

  @media screen and (min-width: 1280px) {
    display: flex;
    margin-top: 60px;
  }
`;
