import WaveMob from '../../components/Header/images/png/WaveMob.png';
import WaveTablet from '../../components/Header/images/png/waveTablet.png';
import womanMobile from '../../components/Header/images/png/womanMobile.png';
import womanTablet from '../../components/Header/images/png/womanTablet.png';
import womanDesktop from '../../components/Header/images/png/womanDesktop.png';
import bgDesktop from '../../components/Header/images/png/WaveDesktop2.png';
import UnionDesk from '../../components/Header/images/UnionDesk.svg';
import WaveDesctop3 from '../../components/Header/images/png/waveDesktop3.png';
import { H1, Page } from '../../components/Header/Header.styled';
import { ImageHeart, ImageWoman, ImageBG, Frame } from './HomePage.styled';

const HomePage = () => {
  return (
    <>
      <Page>
        <H1>
          Take good care on <br />
          your small pets
        </H1>
      </Page>
      <div>
        <ImageHeart src={UnionDesk} alt="heart" />
        <Frame src={WaveDesctop3} alt="frame" />
        <picture>
          <source srcSet={womanMobile} media="(max-width: 767px)" />
          <source srcSet={womanTablet} media="(min-width: 768px) and (max-width: 1279px)" />
          <ImageWoman src={womanDesktop} alt="woman" />
        </picture>
        <picture>
          <source srcSet={WaveMob} media="(max-width: 767px)" />
          <source srcSet={WaveTablet} media="(min-width: 768px) and (max-width: 1279px)" />
          <ImageBG src={bgDesktop} alt="background" />
        </picture>
      </div>
    </>
  );
};

export default HomePage;
