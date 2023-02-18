import { UL, Waves, IMG, H1, Page} from './Header.styled';
import Logo from '../Logo/Logo';
import WavesMob from '../Header/images/wavesMob.svg';
import girl from '../Header/images/girl.svg';
import Nav from '../Nav/Nav';
import BgMenu from '../BgMenu/bgmenu';
import AuthNav from '../AuthNav/AuthNav';



export const Header = () => {

  return (

    <>
      <UL>
        <Logo/>
        <Nav/> 
        <AuthNav/>
        <BgMenu/>
      </UL>
      <Page>
        <H1>Take good care of your small pets</H1>
      </Page>
      <div>
        <IMG src={girl} alt="girl"></IMG>
        <Waves src={WavesMob} alt="waves"></Waves>
      </div>

    </>



  )
  
};

export default Header;