import styled from 'styled-components';

export const ModalButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
    flex-direction: row-reverse;
    align-items: baseline;
    justify-content: flex-start;
    gap: 12px;
    margin-top: 40px;
  }
`;

export const ModalButtonContact = styled.button`
  width: 240px;
  height: 40px;
  background: ${props => props.theme.colors.accent};
  border: 2px solid ${props => props.theme.colors.accent};
  border-radius: 40px;
  cursor: pointer;
  transition: transform ${props => props.theme.animation.cubicBezier};

  &:hover {
    background-color: ${props => props.theme.colors.white};
    transform: scale(1.07) rotateX(0deg) translateZ(25px);
  }
  &:hover > span {
    color: ${props => props.theme.colors.black};
  }

  @media (min-width: 768px) {
    width: 160px;
  }
`;

export const ModalButtonText = styled.span`
  font-family: ${props => props.theme.typography.font.primary};
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 22px;
  letter-spacing: 0.04em;
  color: ${props => props.theme.colors.white};
`;

export const ModalButtonAdd = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 240px;
  height: 40px;
  background: ${props => props.theme.colors.white};
  border: 2px solid ${props => props.theme.colors.accent};
  border-radius: 40px;
  margin-top: 12px;
  cursor: pointer;
  transition: transform ${props => props.theme.animation.cubicBezier};
  @media (min-width: 768px) {
    width: 160px;
    margin: 0;
  }

  &:hover {
    transform: scale(1.07) rotateX(0deg) translateZ(25px);
  }
`;

export const ModalButtonTextAdd = styled.span`
  font-family: ${props => props.theme.typography.font.primary};
  margin-right: 10px;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 22px;
  letter-spacing: 0.04em;
  color: ${props => props.theme.colors.black};
`;
