import React from 'react';
import { useSelector } from 'react-redux';
import { NoticeCategoryItem } from '../../components/NoticeCategoryItem/NoticeCategoryItem';
import { ModalNotice } from '../../components/ModalNotice';
import { selectModal } from '../../redux/modal/selectors';


const NoticesPage = () => {
  const isModalOpen = useSelector(selectModal);

  return (
    <>
      {/* // <div>NoticesPage</div> */}

      <NoticeCategoryItem />
      {isModalOpen && <ModalNotice />}
    </>
  );
};

export default NoticesPage;
