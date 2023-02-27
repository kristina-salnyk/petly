import { Logout } from '../../components/Logout/Logout';
import { UserDataItem } from '../UserDataItem/UserDataItem';
import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { updateUser } from '../../redux/auth/operations';
import { useAuth } from '../../hooks/useAuth';

import {
  InformationBackgroundBlock,
  MyInformation,
  PhotoEditInput,
  PhotoEditSpan,
  PhotoEditWrapper,
  ProfileImg,
  ProfileImgBtn,
  ProfileImgWrapper,
  UserDataWrapper,
} from './UserData.styled';
import { EditPhotoIcon } from '../../components/icons/EditPhotoIcon';
import defaultImage from '../../images/addAvatarMockUp.png';

export const UserData = () => {
  const [temporaryImg, setTemporaryImg] = useState(null);
  const [avatar, setAvatar] = useState(null);

  const { user } = useAuth();

  const dispatch = useDispatch();

  const onImageChange = e => {
    const { files } = e.currentTarget;
    if (files) {
      setTemporaryImg(URL.createObjectURL(files[0]));
      setAvatar(files[0]);
    }
  };
  useEffect(() => {
    if (avatar) {
      const update = new FormData();
      update.append('avatarURL', avatar);
      dispatch(updateUser(update));
    }
  }, [avatar, updateUser]);

  useEffect(() => {
    if (avatar) {
      const update = new FormData();
      update.append('avatarURL', avatar);
      dispatch(updateUser(update));
    }
  }, [avatar, updateUser]);

  const imageUrl = defaultImage;

  return (
    <UserDataWrapper>
      <MyInformation>My information:</MyInformation>
      <InformationBackgroundBlock>
        <form encType="multipart/form-data">
          <ProfileImgWrapper>
            <label>
              <ProfileImgBtn type="file" onChange={onImageChange} />
              <ProfileImg src={user.avatarURL || temporaryImg || imageUrl} alt="User avatar" />
            </label>
          </ProfileImgWrapper>
          <label>
            <PhotoEditWrapper>
              <PhotoEditInput type="file" onChange={onImageChange} />
              <EditPhotoIcon />
              <PhotoEditSpan>Edit photo</PhotoEditSpan>
            </PhotoEditWrapper>
          </label>
        </form>
        <UserDataItem user={user} />
        <Logout />
      </InformationBackgroundBlock>
    </UserDataWrapper>
  );
};
