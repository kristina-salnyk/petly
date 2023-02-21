import React from 'react';
import { NoticeCategoryItem } from '../../components/NoticeCategoryItem/NoticeCategoryItem';
import { ModalNotice } from '../../components/ModalNotice/ModalNotice';
import { useSelector } from 'react-redux';

const NoticesPage = () => {
  const isShowModal = useSelector(state => state.modalNotices);


  return (
    <>
      {/* // <div>NoticesPage</div> */}
      
      {/* рендер тут */}
      <NoticeCategoryItem />
      {isShowModal && <ModalNotice/> }
    </>
  );
};

export default NoticesPage;
