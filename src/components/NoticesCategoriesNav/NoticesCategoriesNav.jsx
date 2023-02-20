import { Categories, Category } from './NoticesCategoriesNav.styled';

export const NoticeCategoriesNav = () => {
  return (
    <Categories>
      <Category to="sell">sell</Category>
      <Category to="lost-found">lost/found</Category>
      <Category to="in-good-hands">in good hands</Category>
      <Category to="favorite-ads">favorite ads</Category>
      <Category to="my-ads">my ads</Category>
    </Categories>
  );
};
