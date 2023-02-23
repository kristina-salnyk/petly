import styled from 'styled-components';

export const ModalInfoWrapper = styled.div`
  /* padding-left: 20px;
  padding-right: 20px; */
`;

export const ModalInfoList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  margin-top: 16px;
`;

export const ModalInfoTitle = styled.li`
  font-family: ${props => props.theme.typography.font.primary};
  font-style: normal;
  font-weight: 700;
  font-size: 28px;
  line-height: 38px;
  letter-spacing: -0.01em;
  margin-bottom: 16px;
  color: ${props => props.theme.colors.black};
`;

export const ModalInfoField = styled.li`
  display: flex;
  font-family: ${props => props.theme.typography.font.primary};
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 22px;
  margin-bottom: 8px;
  color: ${props => props.theme.colors.black};
  &:last-child {
    margin-bottom: 0;
  }
`;

export const ModalInfoName = styled.span`
  font-family: ${props => props.theme.typography.font.primary};
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 19px;
  margin-right: 40px;
  color: ${props => props.theme.colors.text.primary};

  @media (min-width: 768px) {
    font-size: 16px;
    line-height: 22px;
  }
`;
export const ModalInfoValue = styled.span`
 font-family: ${props => props.theme.typography.font.primary};
  font-style: normal;
  font-weight: 500;

  @media (min-width: 768px) {
    
    font-size: 16px;
    line-height: 22px;
  }
`;


