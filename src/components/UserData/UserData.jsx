import { Logout } from '../../components/Logout/Logout';
import { UserDataItem } from '../UserDataItem/UserDataItem';
import {
  UserDataWrapper,
  MyInformation,
  InformationBackgroundBlock,
  ProfileImgWrapper,
  ProfileImgBtn,
  ProfileImg,
  PhotoEditButton,
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
          <ProfileImgBtn type="button">
            <ProfileImg src={imageUrl} alt="User avatar" />
          </ProfileImgBtn>
        </ProfileImgWrapper>
        <PhotoEditButton type="button">
          <EditPhotoIcon />
          <PhotoEditSpan>Edit photo</PhotoEditSpan>
        </PhotoEditButton>
        <UserDataItem />
        <Logout />
      </InformationBackgroundBlock>
    </UserDataWrapper>
  );
};
