import React, { useEffect } from 'react';
import { Modal } from './ModalContent/Modal';
import { ModalWrapper, ModalOverlay } from './ModalNotice.styled';
import { useDispatch } from 'react-redux';
import { changeModal } from '../../redux/modal/slice';
import { useRef } from 'react';

export const ModalNotice = () => {
  const dispatch = useDispatch();
  const modalRef = useRef();

  useEffect(() => {
    const handleEsc = event => {
      if (event.keyCode === 27) {
        console.log('Close');
        dispatch(changeModal());
      }
    };
    window.addEventListener('keydown', handleEsc);

    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, []);

  function handleOverlayClick(event) {
    if (event.target === modalRef.current) {
      dispatch(changeModal());
    }
  }

  return (
    <>
      <ModalOverlay onClick={handleOverlayClick} ref={modalRef}>
        <ModalWrapper>
          <Modal />
        </ModalWrapper>
      </ModalOverlay>
    </>
  );
};
