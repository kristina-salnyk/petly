import { Categories, Category } from './NoticesCategoriesNav.styled';
import { useAuth } from '../../hooks/useAuth';

export const NoticeCategoriesNav = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Categories>
      <Category to="sell">sell</Category>
      <Category to="lost-found">lost/found</Category>
      <Category to="in-good-hands">in good hands</Category>
      {isLoggedIn && <Category to="favorites">favorite ads</Category>}
      {isLoggedIn && <Category to="own">my ads</Category>}
    </Categories>
  );
};
