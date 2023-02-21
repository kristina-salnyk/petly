import { Link } from 'react-router-dom';
import styled from 'styled-components';
import theme from '../../utils/theme';

export const Form = styled.form`
  width: 100%;
  margin: 0 auto;
  @media (min-width: 768px) {
    width: 458px;
  }
`;


export const Input = styled.input`
  display: block;
  width: 100%;
  box-sizing: border-box;
  background: ${theme.colors.primary};
  border: 1px solid rgba(245, 146, 86, 0.5);
  border-radius: 40px;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 19px;
  letter-spacing: 0.04em;
  color: ${theme.colors.dark};

  padding: 11px 14px 12px;
  margin-top: 16px;
  &:first-child {
    margin-top: 0px;
  }
  &:nth-child(3) {
    margin-bottom: 40px;
  }
`;

export const InputField = styled.div`
  position: relative;
  margin-bottom: 16px;
  @media (min-width: 768px) {
    margin-bottom: ${props => (props.margin ? '40px' : '16px')};
  }
`;

export const BtnLogin = styled.button`
  padding: 10px 28px;
  margin-bottom: 40px;
  margin-top:40px;
  background: ${theme.colors.accent};
  border-radius: 40px;
  width:100%;
  color: ${theme.colors.white};
  letter-spacing: 0.04em;
  border: 2px solid ${theme.colors.accent};

  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 27px;

  cursor: pointer;

  &:hover,
  &:focus {
    background: transparent;
    color: ${theme.colors.black};
  }
`;


export const BtnRegistr = styled.button`
  padding: 10px 28px;
  background: ${theme.colors.accent};
  border-radius: 40px;
  width:100%;
  margin-bottom: 16px;
  color: ${theme.colors.white};
  letter-spacing: 0.04em;
  border: 2px solid ${theme.colors.accent};

  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 27px;

  cursor: pointer;

  &:hover,
  &:focus {
    background: transparent;
    color: ${theme.colors.black};
  }
`;


export const BtnBack = styled.button`
  padding: 10px 28px;
  background: ${theme.colors.accent};
  border-radius: 40px;
  width:100%;
  margin-bottom: 40px;
  color: ${theme.colors.white};
  letter-spacing: 0.04em;
  border: 2px solid ${theme.colors.accent};

  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 27px;

  cursor: pointer;

  &:hover,
  &:focus {
    background: transparent;
    color: ${theme.colors.black};
  }
`;
export const LinkInput = styled.p`
  text-align: center;
  color: ${theme.colors.dark};
`;

export const StyledLink = styled(Link)`
  position: relative;
  color: ${theme.colors.link};
  &::after {
    position: absolute;
    display: block;
    content: '';
    width: 100%;
    height: 0.5px;
    background-color: ${theme.colors.link};
    left: 0;
    top: 16px;
  }
`;


export const Pass = styled.div`
  color: #ff6101;
  position: absolute;
  right: 12px;
  top: 12px;
  @media (min-width: 768px) {
    top: 17px;
  }
`;


export const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;

export const GoogleIconStyle = styled.img`
  width: 50px;
  height: 50px;
  opacity: 0.8;
  transition: opacity 300ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    opacity: 1;
  }
`;