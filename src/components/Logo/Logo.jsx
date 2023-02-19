import logo from '../Header/images/petly.svg'
import {LogoImg} from './Logo.styled';

export const Logo = () => {

  return (

    <div>
      <LogoImg src={logo} alt="Logo"/>
    </div>
  )
    
};
  
export default Logo;