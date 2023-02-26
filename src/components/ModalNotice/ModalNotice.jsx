import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { Modal } from './ModalContent/Modal';
import { ModalWrapper, ModalOverlay } from './ModalNotice.styled';

export const ModalNotice = ({ icon, addToFavorite, onShow }) => {
  const modalRef = useRef();

  useEffect(() => {
    const handleEsc = event => {
      if (event.keyCode === 27) {
        onShow();
      }
    };
    window.addEventListener('keydown', handleEsc);

    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, []);

  const handleOverlayClick = event => {
    if (event.target === modalRef.current) {
      onShow();
    }
  };

  return (
    <>
      <ModalOverlay onClick={handleOverlayClick} ref={modalRef}>
        <ModalWrapper>
          <Modal icon={icon} addToFavorite={addToFavorite} onShow={onShow} />
        </ModalWrapper>
      </ModalOverlay>
    </>
  );
};

ModalNotice.propTypes = {
  icon: PropTypes.bool,
  addToFavorite: PropTypes.func,
  onShow: PropTypes.func,
};
