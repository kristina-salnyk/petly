import styled from 'styled-components';

export const NoticeCard = styled.li`
  width: 280px;
  height: 606px;
  background-color: ${props => props.theme.colors.white};
  box-shadow: ${props => props.theme.shadows[0]};
  border-radius: 0px 0px 20px 20px;

  @media (min-width: 768px) {
    width: 336px;
  }

  @media (min-width: 1280px) {
    width: 288px;
  }
`;
