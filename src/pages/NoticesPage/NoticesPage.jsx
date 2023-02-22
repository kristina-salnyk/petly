import React from 'react';
import { Suspense, useEffect, useState } from 'react';
import { Outlet, useSearchParams } from 'react-router-dom';
import { NoticesSearch } from '../../components/NoticesSearch';
import { NoticeCategoriesNav } from '../../components/NoticesCategoriesNav/NoticesCategoriesNav';
import { AddNoticeButton } from '../../components/AddNoticeButton';
import { Container, ContentWrap, PageTitle, TopPanel } from './NoticesPage.styled';


const initNotices = [
  {
    _id: '63f192a4ad43322244318c71',
    category: 'in-good-hands',
    title: 'Сute dog looking for a home',
    name: 'Ralf',
    birthday: '2018-10-09',
    breed: 'Pomeranian',
    sex: 'male',
    location: 'Lviv',
    price: '800$',
    image:
      'https://www.wdc.govt.nz/files/sharedassets/public/image-collection/animals/dog-adopt-baxter.jpg?dimension=pageimage&w=480',
    comments:
      'German Great Dane puppies perfect purebred bloodline, the best European dogs. Protective vaccinations chip, passport FCI export pedigree Worldwide shipping. more information on private messages.',
    owner: '63f190fc5edc96ee6c83f79f',
  },
  {
    _id: '63f192a4ad43322244318c72',
    category: 'sell',
    title: 'Сute dog looking for a home',
    name: 'Ralf',
    birthday: '2018-10-09',
    breed: 'Pomeranian',
    gender: 'male',
    location: 'Lviv',
    price: '800$',
    image:
      'https://www.wdc.govt.nz/files/sharedassets/public/image-collection/animals/dog-adopt-baxter.jpg?dimension=pageimage&w=480',
    comments:
      'German Great Dane puppies perfect purebred bloodline, the best European dogs. Protective vaccinations chip, passport FCI export pedigree Worldwide shipping. more information on private messages.',
    owner: '63f190fc5edc96ee6c83f79f',
  },
  {
    _id: '63f192a4ad43322244318c73',
    category: 'in-good-hands',
    title: 'Сute dog looking for a home',
    name: 'Ralf',
    birthday: '2018-10-09',
    breed: 'Pomeranian',
    sex: 'male',
    location: 'Lviv',
    price: '800$',
    image:
      'https://www.wdc.govt.nz/files/sharedassets/public/image-collection/animals/dog-adopt-baxter.jpg?dimension=pageimage&w=480',
    comments:
      'German Great Dane puppies perfect purebred bloodline, the best European dogs. Protective vaccinations chip, passport FCI export pedigree Worldwide shipping. more information on private messages.',
    owner: '63f190fc5edc96ee6c83f79f',
  },
  {
    _id: '63f192a4ad43322244318c74',
    category: 'in-good-hands',
    title: 'Сute dog looking for a home',
    name: 'Ralf',
    birthday: '2018-10-09',
    breed: 'Pomeranian',
    sex: 'male',
    location: 'Lviv',
    price: '800$',
    image:
      'https://www.wdc.govt.nz/files/sharedassets/public/image-collection/animals/dog-adopt-baxter.jpg?dimension=pageimage&w=480',
    comments:
      'German Great Dane puppies perfect purebred bloodline, the best European dogs. Protective vaccinations chip, passport FCI export pedigree Worldwide shipping. more information on private messages.',
    owner: '63f190fc5edc96ee6c83f79f',
  },
];

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
