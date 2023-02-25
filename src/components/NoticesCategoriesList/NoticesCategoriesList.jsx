import { NoticeCategoryItem } from '../NoticeCategoryItem';
import { List } from './NoticesCategoriesList.styled';
import { useSelector } from 'react-redux';
import { selectSearchedNotices } from '../../redux/notices/selectors';
import { InformationBlock } from '../InformationBlock/InformationBlock';
import noResultsImg from '../../images/no-results-img.png';

export const NoticeCategoriesList = () => {
  const notices = useSelector(selectSearchedNotices);

  return (
    <>
      {notices.length > 0 ? (
        <List>
          {notices.map(item => (
            <NoticeCategoryItem key={item._id} {...item} />
          ))}
        </List>
      ) : (
        <InformationBlock
          title="No notices were found"
          img={noResultsImg}
          containerStyles={{ padding: '40px 0' }}
        />
      )}
    </>
  );
};
