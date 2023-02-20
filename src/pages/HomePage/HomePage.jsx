
import WaveMob from '../../components/Header/images/png/WaveMob.png';
import WaveTablet from '../../components/Header/images/png/waveTablet.png';
import womanMobile from '../../components/Header/images/png/womanMobile.png';
import womanTablet from '../../components/Header/images/png/womanTablet.png';
import womanDesktop from '../../components/Header/images/png/womanDesktop.png';
import bgDesktop from '../../components/Header/images/png/WaveDesktop2.png';
import UnionDesk from '../../components/Header/images/UnionDesk.svg';
import WaveDesctop3 from '../../components/Header/images/png/waveDesktop3.png';
// import girl from '../../components/Header/images/girl.svg';
// import {Waves, IMG, H1, Page, WavesDesk, Union, } from '../../components/Header/Header.styled';
import {H1, Page} from '../../components/Header/Header.styled';
// import styled from 'styled-components';
import {ImageHeart, ImageWoman, ImageBG, Frame} from './HomePage.styled';



const HomePage = () => {

  return (

    <>
      <Page>
        <H1>Take good care of <br/>your small pets</H1>
      </Page>
      
      {/* <IMG src={girl} alt="girl"></IMG>
        <Waves src={WaveMob} alt="waves"></Waves>
        <WavesDesk src={WaveDesk}></WavesDesk>
        <Union src={UnionDesk}></Union> */}
      <div>
        <ImageHeart src={UnionDesk} alt="heart" />
        <Frame src={WaveDesctop3} alt="frame" />
        <picture>
          <source srcSet={womanMobile} media="(max-width: 760px)" />
          <source srcSet={womanTablet} media="(min-width: 761px) and (max-width: 1280px)" />
          <ImageWoman src={womanDesktop} alt="woman" />
        </picture>
        <picture>
          <source srcSet={WaveMob} media="(max-width: 760px)" />
          <source srcSet={WaveTablet} media="(min-width: 761px) and (max-width: 1280px)" />
          <ImageBG src={bgDesktop} alt="background" />
        </picture>
      </div>
      
    </>

  ) 

};

export default HomePage;

