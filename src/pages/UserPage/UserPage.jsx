import { Wrapper } from './UserPage.styled';
import { UserData } from '../../components/UserData/UserData';
import { PetsData } from '../../components/PetsData/PetsData';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getUserInfo } from '../../redux/auth/operations';
const UserPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUserInfo());
  });
  return (
    <Wrapper>
      <UserData />
      <PetsData />
    </Wrapper>
  );
};

export default UserPage;
