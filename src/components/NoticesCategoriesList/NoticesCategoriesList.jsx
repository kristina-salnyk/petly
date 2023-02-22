import { NoticeCategoryItem } from '../NoticeCategoryItem';
import { List } from './NoticesCategoriesList.styled';
import { useSelector } from 'react-redux';
import { selectNotices } from '../../redux/notices/selectors';

export const NoticeCategoriesList = () => {
  const notices = useSelector(selectNotices);

  return (
    <>
      {notices.length > 0 && (
        <List>
          {notices.map(item => (
            <NoticeCategoryItem key={item._id} {...item} />
          ))}
        </List>
      )}
    </>
  );
};
