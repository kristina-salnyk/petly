import { Suspense, useEffect, useState } from 'react';
import { Outlet, useParams, useSearchParams } from 'react-router-dom';
import { NoticesSearch } from '../../components/NoticesSearch';
import { NoticeCategoriesNav } from '../../components/NoticesCategoriesNav/NoticesCategoriesNav';
import { AddNoticeButton } from '../../components/AddNoticeButton';
import { Container, ContentWrap, PageTitle, TopPanel } from './NoticesPage.styled';
import { GlobalStyle } from '../../components/ModalAddNotice/ModalAddNotice.styled';
import { ModalAddNotice } from '../../components/ModalAddNotice';
import { useDispatch, useSelector } from 'react-redux';
import { selectSearchQuery } from '../../redux/notices/selectors';
import { fetchNotices } from '../../redux/notices/operations';
import { changeSearchQuery } from '../../redux/notices/slice';
import Loader from '../../components/Loader/Loader';

const NoticesPage = () => {
  const dispatch = useDispatch();
  const { category } = useParams();

  const [showModal, setShowModal] = useState(false);
  const openModal = () => {
    setShowModal(prev => !prev);
  };

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
          <AddNoticeButton onClick={openModal} />
        </TopPanel>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </ContentWrap>
      <ModalAddNotice showModal={showModal} setShowModal={setShowModal} />
      <GlobalStyle />
    </Container>
  );
};

export default NoticesPage;
