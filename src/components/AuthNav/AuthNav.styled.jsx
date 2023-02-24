import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Div = styled.div`
  display: flex;
  
  @media (max-width: 767px) {
  display: none;

} 
@media (min-width: 767px) {
  :hover{
    background-color: #F59256
     color:#FFFFFF;
     cursor: pointer;

} 
 
`


export const Auth = styled.ul`
  display: block;
  @media (max-width: 767px) {
    display: none;
  }
  @media (min-width: 768px) {
    display: flex;
      hover{
      background-color: #F59256
       color:#FFFFFF;
       cursor: pointer;
      
    
  } 
  
    
`


export const Login = styled.div`
  border-radius: 40px;
  border: 2px solid #f59256;
  color: #111111;
  padding: 5px 28px;
  text-align: center;
  text-decoration: none;
  display: inline-flex;
  font-size: 16px;
  text-decoration: none;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  @media (min-width: 320px) {
    &:hover {
      color: #ffffff;
      background-color: #f59256;
      cursor: pointer;
    }
  }

  @media (min-width: 768px) {
    &:hover {
      color: #ffffff;
      cursor: pointer;
    }
  }

  font-family: 'Manrope';
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 27px;
  text-decoration: none;
  margin-right: 20px;
`;
export const StyledLogin = styled(NavLink)`
  text-decoration: none;
  color: #111111;
  &:hover {
    color: #ffffff;
    cursor: pointer;
  }
`;
export const StyledRegister = styled(NavLink)`
  text-decoration: none;
  color: #111111;
  &:hover {
    color: #ffffff;
  }
`;

export const Register = styled.li`
  border-radius: 40px;
  border: 2px solid #f59256;
  color: #111111;
  padding: 8px 28px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;

  @media (min-width: 768px) {
    &:hover {
      color: #ffffff;
      background-color: #f59256;
    }

    margin-right: 12px;

    font-family: 'Manrope';
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 27px;
    etter-spacing: 0.04em;
    color: #111111;
  }
`;
