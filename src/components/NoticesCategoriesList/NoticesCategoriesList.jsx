import { NoticeCategoryItem } from '../NoticeCategoryItem';
import { List } from './NoticesCategoriesList.styled';
import { useSelector } from 'react-redux';
import { selectSearchedNotices } from '../../redux/notices/selectors';
import { InformationBlock } from '../InformationBlock/InformationBlock';
import noResultsImg from '../../images/no-results-img.png';
import { useParams } from 'react-router-dom';

export const NoticeCategoriesList = () => {
  const notices = useSelector(selectSearchedNotices);
  const { category } = useParams();

  return (
    <>
      {notices.length > 0 ? (
        <List>
          {notices.map(item => {
            return (
              <>
                {((category === 'favorites' && item.favorite) || category !== 'favorites') && (
                  <NoticeCategoryItem key={item._id} {...item} />
                )}
              </>
            );
          })}
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
