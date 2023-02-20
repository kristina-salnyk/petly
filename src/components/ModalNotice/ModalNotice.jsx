import React from 'react';
import { Modal } from './ModalContent/Modal';
import { ModalWrapper, ModalOverlay } from './ModalNotice.styled';

export const ModalNotice = () => {
  return (
    <>
      <ModalOverlay>
        <ModalWrapper>
          <Modal />
        </ModalWrapper>
      </ModalOverlay>
    </>
  );
};
