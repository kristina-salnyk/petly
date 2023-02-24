import { Link } from 'react-router-dom';
import styled from 'styled-components';
import theme from '../../utils/theme';
import { Form, Field } from 'formik';

export const FormField = styled(Form)`
  width: 100%;
  margin: 0 auto;
  @media (min-width: 768px) {
    width: 458px;
  }
`;

export const Input = styled(Field)`
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

export const Button = styled.button`
  color: ${props => (props.outline ? 'black' : 'white')};
  width: 100%;
  padding: 10px;
  border-radius: 40px;
  font-size: 20px;
  border: ${props =>
    props.outline ? `2px solid ${theme.colors.accent}` : `2px solid ${theme.colors.accent}`};
  background-color: ${props => (props.outline ? 'white' : `${theme.colors.accent}`)};
  margin-bottom: ${props => (props.noMargin ? '0' : '20px')};
  transition: background-color 300ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    background-color: ${theme.colors.white};
    border: 2px solid ${theme.colors.accent};
    color: #000000;
  }
  @media (min-width: 768px) {
    padding: 18px;
    margin-bottom: ${props => (props.margin ? '40px' : '16px')};
  }
`;

export const LinkField = styled.p`
  text-align: center;
  color: ${theme.colors.dark};
  font-size: 12px;
`;

export const StyledLink = styled(Link)`
  position: relative;
  color: ${theme.colors.link};
  &::before {
    position: absolute;
    display: block;
    content: '';
    width: 100%;
    height: 0.5px;
    background-color: blue;
    left: 0;
    top: 14px;
  }
`;

export const DivPass = styled.div`
  color: #ff6101;
  position: absolute;
  right: 12px;
  top: 12px;
  @media (min-width: 768px) {
    top: 17px;
  }
`;
