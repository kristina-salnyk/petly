import styled from 'styled-components';

export const CardInfoWrapper = styled.div`
  padding: 20px;

  @media (min-width: 768px) {
    /* padding-right: 85px; */
  }
  @media (min-width: 1280px) {
    /* padding-right: 37px; */
  }
`;

export const CardInfoList = styled.ul`
  list-style: none;
  /* margin: 0;
  padding: 0;*/
  margin-top: 20px;
  display: grid;
  grid-template-columns: 2fr 5fr;
  grid-gap: ${({ theme }) => theme.spacing[2]}px;
`;

export const CardInfoTitle = styled.span`
  font-family: ${props => props.theme.typography.font.primary};
  font-style: normal;
  font-weight: 700;
  font-size: 28px;
  line-height: 38px;
  letter-spacing: -0.01em;
  margin-bottom: 20px;
  color: ${props => props.theme.colors.black};
`;

export const CardInfoName = styled.span`
  font-family: ${props => props.theme.typography.font.primary};
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 22px;
  margin-right: 40px;
  color: ${props => props.theme.colors.black};
`;
export const CardInfoValue = styled.span`
  font-family: ${props => props.theme.typography.font.primary};
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 22px;
  color: ${props => props.theme.colors.black};
`;
