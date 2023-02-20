import styled from 'styled-components';
// import theme from '../../../utils/theme';

export const CardInfoWrapper = styled.div`
  padding-left: 20px;
  padding-right: 29px;

  @media (min-width: 768px) {
    padding-right: 85px;
  }
  @media (min-width: 1280px) {
    padding-right: 37px;
  }
`;

export const CardInfoList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  margin-top: 20px;
`;

export const CardInfoTitle = styled.li`
  font-style: normal;
  font-weight: 700;
  font-size: 28px;
  line-height: 38px;
  letter-spacing: -0.01em;
  margin-bottom: 20px;
  color: #111111;
`;

export const CardInfoField = styled.li`
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 22px;
`;

export const CardInfoName = styled.span`
  margin-right: 40px;
`;
export const CardInfoValue = styled.span``;
