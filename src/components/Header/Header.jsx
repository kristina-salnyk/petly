import {Wrapper, HederWrapper} from './Header.styled';
import Logo from '../Logo/Logo';
import React, {useState}  from 'react';
import Nav from '../Nav/Nav';
import BgMenu from '../BgMenu/bgmenu';
import AuthNav from '../AuthNav/AuthNav';
import UserMenu from '../../components/UserNav/UserNav';



export const Header = () => {

  const [burger_class, setBurgerClass] = useState('burger-bar unclicked')
  const [menu_class, setMenuClass] = useState('menu hidden')
  const [isMenuClicked, setIsMenuClicked] = useState(false)
  // const [isLoggedIn, setIsLoggedIn] = useState(false)
  let isLoggedIn =false

  const updateMenu = () => {
    if(!isMenuClicked) {
      setBurgerClass('burger-bar clicked')
      setMenuClass('menu visible')
    }
    else {
      setBurgerClass('burger-bar unclicked')
      setMenuClass('menu hidden')
    }
    setIsMenuClicked(!isMenuClicked)
  } 

  return (

    <>
      <HederWrapper>
        <Wrapper>
          <Logo/>
          <Nav/> 
        </Wrapper>
        {isLoggedIn ? <UserMenu /> :<AuthNav isMenuClicked = {isMenuClicked}/>}
        
        <BgMenu burger_class={burger_class} menu_class={menu_class} updateMenu={updateMenu}/>
      </HederWrapper>
    </>

  )
  
};

export default Header;