import { Wrapper, HederWrapper, UserWrapper } from './Header.styled';
import Logo from '../Logo/Logo';
import React, { useState, useEffect } from 'react';
import Nav from '../Nav/Nav';
import BgMenu from '../BgMenu/bgmenu';
import AuthNav from '../AuthNav/AuthNav';
import UserMenu from '../../components/UserNav/UserNav';
import { selectIsLoggedIn, selectIsRefreshing } from '../../redux/auth/selectors';
import { useSelector, useDispatch } from 'react-redux';
import { refreshUser } from '../../redux/auth/operations';

export const Header = () => {
  const [burger_class, setBurgerClass] = useState('burger-bar unclicked');
  const [menu_class, setMenuClass] = useState('menu hidden');
  const [isMenuClicked, setIsMenuClicked] = useState(false);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing);
  const dispatch = useDispatch();
  useEffect(() => {
    if (isLoggedIn) {
      dispatch(refreshUser());
    }
  }, [dispatch, isLoggedIn]);

  const updateMenu = () => {
    if (!isMenuClicked) {
      setBurgerClass('burger-bar clicked');
      setMenuClass('menu visible');
    } else {
      setBurgerClass('burger-bar unclicked');
      setMenuClass('menu hidden');
    }
    setIsMenuClicked(!isMenuClicked);
  };

  return (
    <>
      <HederWrapper>
        <Wrapper>
          <Logo />
          <Nav />
        </Wrapper>
        <UserWrapper>
          {!isLoggedIn && !isRefreshing ? (
            <AuthNav isMenuClicked={isMenuClicked} />
          ) : (
            <UserMenu isMenuClicked={isMenuClicked} />
          )}
          <BgMenu burger_class={burger_class} menu_class={menu_class} updateMenu={updateMenu} />
        </UserWrapper>
      </HederWrapper>
    </>
  );
};
