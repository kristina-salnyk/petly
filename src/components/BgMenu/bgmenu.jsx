// import React, {useState}  from 'react';
import { Link } from 'react-router-dom';
import  './bgmenu.css'
import PropTypes from 'prop-types';
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import { useSelector } from 'react-redux';
import {Login} from '../AuthNav/AuthNav.styled';

const BgMenu = ({burger_class, menu_class, updateMenu})=> {
  const  isLoggedIn  =  useSelector(selectIsLoggedIn);
  

  return (

    <div className='Wrapper' style={{width: '100%', height: '100 hv'}}>
      <nav className='BG'>
        <div className="burger-menu" onClick = {updateMenu}>

          <div className={burger_class}></div>
          <div className={burger_class}></div>
          <div className={burger_class}></div>

        </div>
      </nav>
      <div className={menu_class}>
        
        <ul className="auth" >
          {!isLoggedIn ? 
            <>
              <li className="login">
                <Link to="/login" 
                  className='linkLogin'>
                Login 
                </Link>
              </li>
              <li className="register">
                <Link to="/register"
                  className='linkRegister'>
               Registration
                </Link>
              </li>
            </>
            :
            <li>
              <Login>
                <Link to="/user"
                  className='linkUser'>
                  Account
                </Link>
              </Login>
            </li>
          }
        </ul>
        <div className="div">
          <ul className="bgNews">
            <li className='news' onClick = {updateMenu}>
              <Link to="/news" 
                className='linkNews'>
                  News 
              </Link>
            </li>
            <li className='find' onClick = {updateMenu}>
              <Link to="/notices"
                className="linkNotices">
               
             Find pet
              </Link>
            </li>
            <li onClick = {updateMenu}>
              <Link to="/friends"
                className='linkFriends'>
              Our friends
              </Link>
             
            </li>
          </ul>
        </div>
      </div>
              
            
            

    </div>
  )

};

BgMenu.propTypes = {
  updateMenu: PropTypes.func.isRequired,
  burger_class:PropTypes.string.isRequired,
  menu_class:PropTypes.string.isRequired
};

export default BgMenu;