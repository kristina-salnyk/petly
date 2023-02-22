import React from 'react';
import { Modal } from './ModalContent/Modal';
import { ModalWrapper, ModalOverlay } from './ModalNotice.styled';
// import { useDispatch } from 'react-redux';
// import { changeModal } from '../../redux/modal/slice';

export const ModalNotice = () => {
  // const dispatch = useDispatch();

  // const handleModalChange = () => {
  //   dispatch(changeModal());
  // };

  return (
    <>
      <ModalOverlay >
        <ModalWrapper>
          <Modal />
        </ModalWrapper>
      </ModalOverlay>
    </>
  );
};
