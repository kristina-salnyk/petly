import React, {useState}  from 'react';
import { Link } from 'react-router-dom';
import  './bgmenu.css'

const BgMenu = ()=> {

  
  const [burger_class, setBurgerClass] = useState('burger-bar unclicked')
  const [menu_class, setMenuClass] = useState('menu hidden')
  const [isMenuClicked, setIsMenuClicked] = useState(false)

   
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

    <div style={{width: '100%', height: '100 hv'}}>
      <nav className='BG'>
        <div className="burger-menu" onClick = {updateMenu}>

          <div className={burger_class}></div>
          <div className={burger_class}></div>
          <div className={burger_class}></div>

        </div>
      </nav>
      <div className={menu_class}>
        <ul className="auth">
          <li className="login">Login</li>
          <li className="register">Registration</li>
        </ul>
        <div className="div">
          <ul className="bgNews">
            <li className='news'>
              <Link to="/news" 
                className='linkNews'>
                  News 
              </Link>
            </li>
            <li className='find'>
              <Link to="/notices"
                className="linkNotices">
               
             Find pet
              </Link>
            </li>
            <li>
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

export default BgMenu;