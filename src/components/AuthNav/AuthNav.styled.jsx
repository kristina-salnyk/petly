import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Div = styled.div`
  display: flex;

  @media (max-width: 767px) {
    display: none;
  }
`;

export const Auth = styled.ul`
  display: block;
  @media (max-width: 767px) {
    display: none;
  }
  @media (min-width: 768px) {
    display: flex;
    hover {
      background-color: #f59256;
      color: #ffffff;
      cursor: pointer;
    }
  }
`;

export const Login = styled(NavLink)`
  border-radius: 40px;
  border: 2px solid #f59256;
  color: #111111;
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
      cursor: pointer;
    }
  }

  @media (min-width: 768px) {
    margin-right: 20px;
    &:hover {
      background: #f59256;
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
`;
export const LoginBg = styled(NavLink)`
  border-radius: 40px;
  border: 2px solid #f59256;
  background-color: #f59256;
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
`;
export const UserLogin = styled(NavLink)``;

export const UserRegister = styled(NavLink)``;

export const LinkStyled = styled(NavLink)`
  padding: 8px 28px;
  color: #111111;
  border-radius: 40px;
  border: 2px solid #f59256;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;

  &.active {
    background-color: ${({ theme }) => theme.colors.accent};
    color: ${({ theme }) => theme.colors.white};
  }

  &:hover {
    color: #ffffff;
    background-color: #f59256;
  }

  @media (min-width: 768px) {
    margin-right: 12px;
    font-weight: 500;
    font-size: 20px;
  }
`;
