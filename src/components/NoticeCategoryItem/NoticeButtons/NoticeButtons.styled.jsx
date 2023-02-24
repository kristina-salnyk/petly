import styled from 'styled-components';

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-left: 16px;
  padding-right: 16px;
`;

export const ButtonLearnMore = styled.button`
  width: 248px;
  height: 38px;
  background: ${props => props.theme.colors.white};
  border: 2px solid ${props => props.theme.colors.accent};
  border-radius: 40px;
  cursor: pointer;
  &:hover {
    background: ${props => props.theme.colors.accent};
  }
  &:hover > span {
    color: ${props => props.theme.colors.white};
  }
`;

export const ButtonText = styled.span`
  font-family: ${props => props.theme.typography.font.primary};
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 22px;
  letter-spacing: 0.04em;
  color: ${props => props.theme.colors.accent};
 
`;

export const ButtonDelete = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 248px;
  height: 38px;
  background: ${props => props.theme.colors.white};
  border: 2px solid ${props => props.theme.colors.brightAccent};
  border-radius: 40px;
  margin-top: 12px;
  color: ${props => props.theme.colors.brightAccent};
  cursor: pointer;
  &:hover {
    background: ${props => props.theme.colors.background.primary};
    border: 2px solid red;
    transform: scale(1.02) rotateX(0deg) translateZ(25px);
  }
  &:hover > span {
    color: red;
  }
`;

export const ButtonTextDelete = styled.span`
  font-family: ${props => props.theme.typography.font.primary};
  margin-right: 10px;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 22px;
  letter-spacing: 0.04em;
  color: ${props => props.theme.colors.brightAccent};
`;
