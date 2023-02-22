import { Suspense, useEffect } from 'react';
import { Outlet, useParams, useSearchParams } from 'react-router-dom';
import { NoticesSearch } from '../../components/NoticesSearch';
import { NoticeCategoriesNav } from '../../components/NoticesCategoriesNav/NoticesCategoriesNav';
import { AddNoticeButton } from '../../components/AddNoticeButton';
import { Container, ContentWrap, PageTitle, TopPanel } from './NoticesPage.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectSearchQuery } from '../../redux/notices/selectors';
import { fetchNotices } from '../../redux/notices/operations';
import { changeSearchQuery } from '../../redux/notices/slice';


const NoticesPage = () => {
  const dispatch = useDispatch();
  const { category } = useParams();

  const [searchParams, setSearchParams] = useSearchParams();
  const queryParam = searchParams.get('query') ?? '';

  const searchQuery = useSelector(selectSearchQuery);

  useEffect(() => {
    if (!queryParam) {
      return setSearchQueryParam();
    }
    dispatch(changeSearchQuery(queryParam));
    return () => {
      dispatch(changeSearchQuery(''));
    };
  }, [queryParam]);

  useEffect(() => {
    dispatch(fetchNotices({ category }));
  }, [dispatch, category]);

  const setSearchQueryParam = () => {
    const query = searchQuery.trim();
    const newParams = query !== '' ? { query } : {};
    setSearchParams(newParams);
  };

  return (
    <Container>
      <ContentWrap>
        <PageTitle>Find your favorite pet</PageTitle>
        <NoticesSearch onSubmit={setSearchQueryParam} />
        <TopPanel>
          <NoticeCategoriesNav />
          <AddNoticeButton />
        </TopPanel>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </ContentWrap>
    </Container>
  );
};

export default NoticesPage;
