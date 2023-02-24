import styled from 'styled-components';

export const ModalInfoWrapper = styled.div`
  padding: 20px;
`;

export const ModalInfoList = styled.ul`
  list-style: none;
  margin-top: 16px;
  display: grid;
  grid-template-columns: 2fr 5fr;
  grid-gap: ${({ theme }) => theme.spacing[2]}px;
`;

export const ModalInfoTitle = styled.span`
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

export const ModalInfoLink = styled.a`
  color: ${props => props.theme.colors.text.primary};
  text-decoration: none;
  &:hover {
    cursor: pointer;
    color: ${props => props.theme.colors.accent};
    transition: color ${props => props.theme.animation.cubicBezier};
  }
`;
