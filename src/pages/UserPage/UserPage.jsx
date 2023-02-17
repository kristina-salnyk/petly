import { UserData } from '../../components/UserData/UserData';
import { Logout } from '../../components/Logout/Logout';
import { PetsData } from '../../components/PetsData/PetsData';

const UserPage = () => {
  return (
    <div>
      <UserData />
      <Logout />
      <PetsData />
    </div>
  );
};

export default UserPage;
