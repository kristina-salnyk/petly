import { Categories, Category } from './NoticesCategoriesNav.styled';

export const NoticeCategoriesNav = () => {
  return (
    <Categories>
      <Category to="sell">sell</Category>
      <Category to="lost-found">lost/found</Category>
      <Category to="in-good-hands">in good hands</Category>
      <Category to="favorites">favorite ads</Category>
      <Category to="own">my ads</Category>
    </Categories>
  );
};
