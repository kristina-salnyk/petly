import { Wrapper } from './UserPage.styled';
import { UserData } from '../../components/UserData/UserData';
import { PetsData } from '../../components/PetsData/PetsData';

const UserPage = () => {
  return (
    <Wrapper>
      <UserData />
      <PetsData />
    </Wrapper>
  );
};

export default UserPage;
