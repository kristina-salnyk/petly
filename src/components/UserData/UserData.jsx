import { Logout } from '../../components/Logout/Logout';
import {
  MyInformation,
  InformationBackgroundBlock,
  ProfileImgWrapper,
  ProfileImg,
} from './UserData.styled';
import { ReactComponent as CameraIcon } from '../../icons/cameraIcon.svg';
import defaultImage from '../../images/ellipse.png';

export const UserData = () => {
  const imageUrl = defaultImage;

  return (
    <div>
      <MyInformation>My information:</MyInformation>
      <InformationBackgroundBlock>
        <ProfileImgWrapper>
          <ProfileImg src={imageUrl} alt="User avatar" />
        </ProfileImgWrapper>

        <button type="button">
          <CameraIcon />
          <span>Edit photo</span>
        </button>
        <ul>
          <li>
            <label>
              Name:
              <input type="text" />
            </label>
            <button type="button"></button>
          </li>
          <li>
            <label>
              Email:
              <input type="text" />
            </label>
            <button type="button"></button>
          </li>
          <li>
            <label>
              Birthday:
              <input type="text" />
            </label>
            <button type="button"></button>
          </li>
          <li>
            <label>
              Phone:
              <input type="text" />
            </label>
            <button type="button"></button>
          </li>
          <li>
            <label>
              City:
              <input type="text" />
            </label>
            <button type="button"></button>
          </li>
        </ul>
        <Logout />
      </InformationBackgroundBlock>
    </div>
  );
};
