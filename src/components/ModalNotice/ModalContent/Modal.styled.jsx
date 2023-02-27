import styled from 'styled-components';

export const ModalThumb = styled.div`
  position: relative;
  width: 280px;
  background-color: ${props => props.theme.colors.white};
  padding: 20px;
  border-radius: 20px;
  height: 100vh;
  overflow-y: scroll;

  @media (min-width: 768px) {
    width: 704px;
    height: 540px;
    overflow-y: hidden;
  }
`;

export const CloseModalButton = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 34px;
  height: 34px;
  background: ${props => props.theme.colors.background.primary};
  backdrop-filter: blur(2px);
  border-radius: 50%;
  &:hover {
    background: ${props => props.theme.colors.white};
    border: 1px solid ${props => props.theme.colors.accent};
    cursor: pointer;
  }
  &:hover > svg {
    transition: fill ${props => props.theme.animation.cubicBezier};
    fill: ${props => props.theme.colors.brightAccent};
  }
`;

export const TabletWrapper = styled.div`
  @media (min-width: 768px) {
    display: flex;
    gap: 20px;
  }
`;

export const ModalComments = styled.p`
  @media (min-width: 768px) {
    margin-top: 10px;
  }
`;

export const ModalCommentsName = styled.span`
  font-family: ${props => props.theme.typography.font.primary};
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 19px;

  color: ${props => props.theme.colors.text.primary};

  @media (min-width: 768px) {
    font-size: 16px;
    line-height: 22px;
  }
`;

export const ModalCommentsText = styled.span`
  font-family: ${props => props.theme.typography.font.primary};
  font-style: normal;
  font-size: 14px;
  line-height: 16px;
  color: ${props => props.theme.colors.text.primary};

  @media (min-width: 768px) {
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0.04em;
  }
`;
