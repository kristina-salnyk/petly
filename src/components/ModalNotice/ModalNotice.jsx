import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Modal } from './ModalContent/Modal';
import { ModalWrapper, ModalOverlay } from './ModalNotice.styled';



import { useRef } from 'react';

export const ModalNotice = ({id,onShow}) => {

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

  function handleOverlayClick(event) {
    if (event.target === modalRef.current) {
      onShow();
    }
  }

  return (
    <>
      <ModalOverlay onClick={handleOverlayClick} ref={modalRef}>
        <ModalWrapper>
          <Modal id={id} onShow={onShow}/>
        </ModalWrapper>
      </ModalOverlay>
    </>
  );
};

ModalNotice.propTypes = {
  id:PropTypes.string,
  onShow: PropTypes.func,
};
