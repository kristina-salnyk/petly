import { ErrorTitle, List, TitleFriends } from './FriendsList.styled';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { selectFriends, selectIsLoading } from '../../../redux/friends/selectors';
import { fetchFriends } from '../../../redux/friends/operations';
import FriendsItem from '../FriendsItem/FriendsItem';
import Loading from '../../Loading/Loading';
import NotFound from '../../Loading/NotFound';

const FriendsList = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const friends = useSelector(selectFriends);

  useEffect(() => {
    dispatch(fetchFriends());
  }, [dispatch]);

  return (
    <>
      <TitleFriends>Our Friends</TitleFriends>
      <List>
        {isLoading ? (
          <Loading />
        ) : (
          friends.map(
            ({ _id, title, url, addressUrl, imageUrl, address, workDays, phone, email }) => (
              <FriendsItem
                key={_id}
                title={title}
                website={url}
                location={addressUrl}
                imageUrl={imageUrl}
                address={address}
                workDays={workDays}
                phone={phone}
                email={email}
              />
            )
          )
        )}
        {friends.length === 0 && !isLoading && (
          <div>
            <ErrorTitle> Ooops, something went wrong, try reloading the page </ErrorTitle>
            <NotFound />
          </div>
        )}
      </List>
    </>
  );
};

export default FriendsList;
