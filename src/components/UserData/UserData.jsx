import { Logout } from '../../components/Logout/Logout';
import { UserDataItem } from '../UserDataItem/UserDataItem';
import {
  UserDataWrapper,
  MyInformation,
  InformationBackgroundBlock,
  ProfileImgWrapper,
  ProfileImgBtn,
  ProfileImg,
  PhotoEditWrapper,
  PhotoEditInput,
  PhotoEditSpan,
} from './UserData.styled';
import { EditPhotoIcon } from '../../components/icons/EditPhotoIcon';
import defaultImage from '../../images/addAvatarMockUp.png';

export const UserData = () => {
  const imageUrl = defaultImage;

  return (
    <UserDataWrapper>
      <MyInformation>My information:</MyInformation>
      <InformationBackgroundBlock>
        <ProfileImgWrapper>
          <label>
            <ProfileImgBtn type="file" />
            <ProfileImg src={imageUrl} alt="User avatar" />
          </label>
        </ProfileImgWrapper>
        <label>
          <PhotoEditWrapper>
            <PhotoEditInput type="file" />
            <EditPhotoIcon />
            <PhotoEditSpan>Edit photo</PhotoEditSpan>
          </PhotoEditWrapper>
        </label>
        <UserDataItem />
        <Logout />
      </InformationBackgroundBlock>
    </UserDataWrapper>
  );
};
