// import { Suspense, useEffect, useState } from 'react';
// import { Outlet, useSearchParams } from 'react-router-dom';
// import { NoticesSearch } from '../../components/NoticesSearch';
// import { NoticeCategoriesNav } from '../../components/NoticesCategoriesNav/NoticesCategoriesNav';
// import { AddNoticeButton } from '../../components/AddNoticeButton';
// import { Container, ContentWrap, PageTitle, TopPanel } from './NoticesPage.styled';
// import { ModalAddNotice } from '../../components/ModalAddNotice/ModalAddNotice';
// import { GlobalStyle } from '../../components/ModalAddNotice/ModalAddNotice.styled';
// const initNotices = [
//   {
//     _id: '63f192a4ad43322244318c71',
//     category: 'in-good-hands',
//     title: 'Сute dog looking for a home',
//     name: 'Ralf',
//     birthday: '2018-10-09T22:00:00.000+00:00',
//     breed: 'Pomeranian',
//     sex: 'male',
//     location: 'Lviv',
//     price: '800$',
//     image:
//       'https://www.wdc.govt.nz/files/sharedassets/public/image-collection/animals/dog-adopt-baxter.jpg?dimension=pageimage&w=480',
//     comments:
//       'German Great Dane puppies perfect purebred bloodline, the best European dogs. Protective vaccinations chip, passport FCI export pedigree Worldwide shipping. more information on private messages.',
//     owner: '63f190fc5edc96ee6c83f79f',
//   },
//   {
//     _id: '63f192a4ad43322244318c72',
//     category: 'in-good-hands',
//     title: 'Сute dog looking for a home',
//     name: 'Ralf',
//     birthday: '2018-10-09T22:00:00.000+00:00',
//     breed: 'Pomeranian',
//     gender: 'male',
//     location: 'Lviv',
//     price: '800$',
//     image:
//       'https://www.wdc.govt.nz/files/sharedassets/public/image-collection/animals/dog-adopt-baxter.jpg?dimension=pageimage&w=480',
//     comments:
//       'German Great Dane puppies perfect purebred bloodline, the best European dogs. Protective vaccinations chip, passport FCI export pedigree Worldwide shipping. more information on private messages.',
//     owner: '63f190fc5edc96ee6c83f79f',
//   },
//   {
//     _id: '63f192a4ad43322244318c73',
//     category: 'in-good-hands',
//     title: 'Сute dog looking for a home',
//     name: 'Ralf',
//     birthday: '2018-10-09T22:00:00.000+00:00',
//     breed: 'Pomeranian',
//     sex: 'male',
//     location: 'Lviv',
//     price: '800$',
//     image:
//       'https://www.wdc.govt.nz/files/sharedassets/public/image-collection/animals/dog-adopt-baxter.jpg?dimension=pageimage&w=480',
//     comments:
//       'German Great Dane puppies perfect purebred bloodline, the best European dogs. Protective vaccinations chip, passport FCI export pedigree Worldwide shipping. more information on private messages.',
//     owner: '63f190fc5edc96ee6c83f79f',
//   },
//   {
//     _id: '63f192a4ad43322244318c74',
//     category: 'in-good-hands',
//     title: 'Сute dog looking for a home',
//     name: 'Ralf',
//     birthday: '2018-10-09T22:00:00.000+00:00',
//     breed: 'Pomeranian',
//     sex: 'male',
//     location: 'Lviv',
//     price: '800$',
//     image:
//       'https://www.wdc.govt.nz/files/sharedassets/public/image-collection/animals/dog-adopt-baxter.jpg?dimension=pageimage&w=480',
//     comments:
//       'German Great Dane puppies perfect purebred bloodline, the best European dogs. Protective vaccinations chip, passport FCI export pedigree Worldwide shipping. more information on private messages.',
//     owner: '63f190fc5edc96ee6c83f79f',
//   },
// ];

// const NoticesPage = () => {
//   const [notices, setNotices] = useState(initNotices);
//   // const [isLoading, setIsLoading] = useState(false);
//   // const [error, setError] = useState(null);

//   const [searchParams, setSearchParams] = useSearchParams();
//   const searchQuery = searchParams.get('query') ?? '';
//   const [showModal, setShowModal] = useState(false);
//   const openModal = () => {
//     setShowModal(prev => !prev);
//   };

//   // const { categoryName } = useParams();

//   useEffect(() => {
//     if (searchQuery.trim() === '') return;

//     setNotices(initNotices);

//     // setIsLoading(true);

//     // (async () => {
//     //   try {
//     // const data = await getNotices(searchQuery);
//     // setNotices(data);
//     // } catch (error) {
//     // setError(error);
//     // } finally {
//     // setIsLoading(false);
//     //   }
//     // })();

//     // return () => {
//     // setError(null);
//     // setNotices([]);
//     // };
//   }, [searchQuery]);

//   const setSearchQuery = query => {
//     const newParams = query !== '' ? { query } : {};
//     setSearchParams(newParams);
//   };

//   return (
//     <Container>
//       <ContentWrap>
//         <GlobalStyle />
//         <ModalAddNotice showModal={showModal} setShowModal={setShowModal} />
//         <PageTitle>Find your favorite pet</PageTitle>
//         <NoticesSearch defaultValue={searchQuery} onSubmit={setSearchQuery} />
//         <TopPanel>
//           <NoticeCategoriesNav />
//           <AddNoticeButton onClick={openModal}></AddNoticeButton>
//         </TopPanel>
//         <Suspense fallback={<div>Loading...</div>}>
//           <Outlet context={[notices]} />
//         </Suspense>
//       </ContentWrap>
//     </Container>
//   );
// };

// export default NoticesPage;
import React, { useState } from 'react';
import { ModalAddNotice } from '../../components/ModalAddNotice/ModalAddNotice';
import { GlobalStyle } from '../../components/ModalAddNotice/ModalAddNotice.styled';
import { Button, Container } from './NoticesPage.styled';

const NoticesPage = () => {
  const [showModal, setShowModal] = useState(false);
  const openModal = () => {
    setShowModal(prev => !prev);
  };
  return (
    <>
      <Container>
        <ModalAddNotice showModal={showModal} setShowModal={setShowModal} />
        <Button onClick={openModal}>Add pet</Button>

        <GlobalStyle />
      </Container>
    </>
  );
};

export default NoticesPage;
