import React from 'react';

import {
  ModalButtonWrapper,
  ModalButtonContact,
  ModalButtonText,
  ModalButtonAdd,
  ModalButtonTextAdd,
} from './ModalButtons.styled';
import { FavoriteHeartIcon } from '../../../icons/FavoriteInModalHeartIcon';

export const ModalButtons = () => {
  return (
    <>
      <ModalButtonWrapper>
        <a > 
          {' '}
          <ModalButtonContact>
            <ModalButtonText>Contact</ModalButtonText>
          </ModalButtonContact>
        </a>
        <ModalButtonAdd>
          <ModalButtonTextAdd>Add to</ModalButtonTextAdd>
          <FavoriteHeartIcon />
        </ModalButtonAdd>
      </ModalButtonWrapper>
    </>
  );
};
