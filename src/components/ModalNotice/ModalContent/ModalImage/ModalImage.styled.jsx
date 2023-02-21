import styled from 'styled-components';

export const ImageThumb = styled.div`
  width: 240px;
  height: 240px;
  margin-top: 40px;
  background-color: ${props => props.theme.colors.accent};
  border-radius: 0px 0px 40px 40px;

  @media (min-width: 768px) {
    width: 288px;
  height: 328px;
    margin-top: 20px;
  }
`;

export const LableWrapper = styled.div`
  padding-top: 20px;
`;

export const ModalLabel = styled.div`
  display: flex;
  align-items: center;
  width: 138px;
  height: 28px;
  background: ${props => props.theme.colors.light};
  backdrop-filter: blur(2px);
  cursor: default;
  border-radius: 0px 40px 40px 0px;
`;

export const LabelText = styled.span`
  font-family: ${props => props.theme.typography.font.primary};
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 15px;
  letter-spacing: 0.04em;
  color: ${props => props.theme.colors.black};
  margin-left: 20px;
`;
