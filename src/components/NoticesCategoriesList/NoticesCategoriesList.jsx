import { NoticeCategoryItem } from '../NoticeCategoryItem';
import { List } from './NoticesCategoriesList.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsLoading, selectSearchedNotices } from '../../redux/notices/selectors';
import { InformationBlock } from '../InformationBlock/InformationBlock';
import noResultsImg from '../../images/no-results-img.png';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { clearNotices } from '../../redux/notices/slice';
import BlockLoader from '../Loader/BlockLoader';

export const NoticeCategoriesList = () => {
  const notices = useSelector(selectSearchedNotices);
  const isLoading = useSelector(selectIsLoading);
  const { category } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    return () => dispatch(clearNotices());
  }, []);

  const noticesList = notices.filter(
    item => (category === 'favorites' && item.favorite) || category !== 'favorites'
  );

  return (
    <>
      {isLoading && (
        <div style={{ padding: 40, textAlign: 'center' }}>
          <BlockLoader />
        </div>
      )}

      {notices.length > 0 && !isLoading && (
        <List>
          {noticesList.map(item => {
            return <NoticeCategoryItem key={item._id} {...item} />;
          })}
        </List>
      )}

      {notices.length === 0 && !isLoading && (
        <InformationBlock
          title="No notices were found"
          img={noResultsImg}
          containerStyles={{ padding: '40px 0' }}
        />
      )}
    </>
  );
};
