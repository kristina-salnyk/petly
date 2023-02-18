import {Ul, Find, News, Friends} from './Nav.styled';
import { Link } from 'react-router-dom';

export const Nav = () => {

  return (
    <>
      
      <Ul>
        <News>
          <Link to="/news">
                News 
          </Link>
        </News>
        <Find>
          <Link to="/notices">
             Find pet
          </Link>
        </Find>
        <Friends>
          <Link to="/friends">
             Our friends
          </Link>
        </Friends>
      </Ul>
      

    </>

  )

};

export default Nav;