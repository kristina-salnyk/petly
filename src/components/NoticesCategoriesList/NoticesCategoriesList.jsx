import { useOutletContext } from 'react-router-dom';
import { NoticeCategoryItem } from '../NoticeCategoryItem';
import { List } from './NoticesCategoriesList.styled';

export const NoticeCategoriesList = () => {
  const [notices] = useOutletContext();

  return (
    <List>
      {notices.map(item => (
        <NoticeCategoryItem key={item._id} {...item} />
      ))}
    </List>
  );
};
