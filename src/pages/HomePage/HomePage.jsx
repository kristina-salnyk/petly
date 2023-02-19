
import WaveMob from '../../components/Header/images/wavesMob.svg';
import WaveDesk from '../../components/Header/images/waveDesk.svg';
import UnionDesk from '../../components/Header/images/UnionDesk.svg';
import girl from '../../components/Header/images/girl.svg';
import {Waves, IMG, H1, Page, WavesDesk, Union} from '../../components/Header/Header.styled';
import {NavLink} from 'react-router-dom';

const HomePage = () => {
  return (<div>
    <NavLink to="/news">Home</NavLink>

    <Page>
      <H1>Take good care of <br/>your small pets</H1>
    </Page>
    <div>
      <IMG src={girl} alt="girl"></IMG>
      <Waves src={WaveMob} alt="waves"></Waves>
      <WavesDesk src={WaveDesk}></WavesDesk>
      <Union src={UnionDesk}></Union>
    </div>
  </div>


  ) 

};

export default HomePage;