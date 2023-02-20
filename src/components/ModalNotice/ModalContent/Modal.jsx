import React from 'react';
import { ModalImage } from './ModalImage/ModalImage';
import { ModalInfo } from './ModalInfo/ModalInfo';
import { ModalButtons } from './ModalButtons/ModalButtons';
import { ModalThumb, CloseModalButton } from './Modal.styled';
import { CloseModalIcon } from '../../icons/CloseModalIcon';
import theme from '../../../utils/theme';

export const Modal = () => {
  return (
    <>
      <ModalThumb>
        <CloseModalButton>
          <CloseModalIcon width={30} fill={theme.colors.black} />
        </CloseModalButton>

        <ModalImage />

        <ModalInfo />

        <ModalButtons />
      </ModalThumb>
    </>
  );
};
