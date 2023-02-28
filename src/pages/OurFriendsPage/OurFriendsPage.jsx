import FriendsList from '../../components/Friends/FriendsList/FriendsList';
import { Container } from './OurFriendsPage.styled';
import ScrollToTop from '../../components/ScrollToTop/ScrollToTopButton';

const OurFriendsPage = () => {
  return (
    <Container>
      <FriendsList />
      <ScrollToTop />
    </Container>
  );
};

export default OurFriendsPage;
