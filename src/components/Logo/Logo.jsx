import logo from '../Header/images/petly.svg'
import {LogoImg} from './Logo.styled';
import { Link } from 'react-router-dom';

export const Logo = () => {

  return (

    <Link to="/">
      <LogoImg src={logo} alt="Logo"
      ></LogoImg>
    </Link>
  )
    
};
  
export default Logo;