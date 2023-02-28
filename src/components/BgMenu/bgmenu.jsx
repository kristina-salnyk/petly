// import React, {useState}  from 'react';
import './bgmenu.css';
import PropTypes from 'prop-types';
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import { useSelector } from 'react-redux';
import { LinkStyled as AuthLinkStyled, LoginBg } from '../AuthNav/AuthNav.styled';
import { UserIcon } from '../icons/UserIcon';
import { LinkStyled, NavItem } from './BgMenu.styled';

const BgMenu = ({ burger_class, menu_class, updateMenu }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <div className="Wrapper" style={{ width: '100%', height: '100 hv' }}>
      <nav className="BG">
        <div className="burger-menu" onClick={updateMenu}>
          <div className={burger_class}></div>
          <div className={burger_class}></div>
          <div className={burger_class}></div>
        </div>
      </nav>
      <div className={menu_class}>
        <ul className="auth">
          {!isLoggedIn ? (
            <>
              <AuthLinkStyled to="/login" onClick={updateMenu}>
                Login
              </AuthLinkStyled>
              <AuthLinkStyled to="/register" onClick={updateMenu}>
                Registration
              </AuthLinkStyled>
            </>
          ) : (
            <li>
              <LoginBg to="/user" onClick={updateMenu}>
                <UserIcon />
                <div className="linkUser">Account</div>
              </LoginBg>
            </li>
          )}
        </ul>
        <div className="div">
          <ul className="bgNews">
            <NavItem onClick={updateMenu}>
              <LinkStyled to="/news">News</LinkStyled>
            </NavItem>
            <NavItem onClick={updateMenu}>
              <LinkStyled to="/notices">Find pet</LinkStyled>
            </NavItem>
            <NavItem onClick={updateMenu}>
              <LinkStyled to="/friends">Our friends</LinkStyled>
            </NavItem>
          </ul>
        </div>
      </div>
    </div>
  );
};

BgMenu.propTypes = {
  updateMenu: PropTypes.func.isRequired,
  burger_class: PropTypes.string.isRequired,
  menu_class: PropTypes.string.isRequired,
};

export default BgMenu;
