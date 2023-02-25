import React from 'react';
import PropTypes from 'prop-types';
import {
  ModalButtonWrapper,
  ModalButtonContact,
  ModalButtonText,
  ModalButtonAdd,
  ModalButtonTextAdd,
} from './ModalButtons.styled';
import { FavoriteHeartIcon } from '../../../icons/FavoriteInModalHeartIcon';

export const ModalButtons = ({icon, addToFavorite }) => {
  
  const addToFavoriteModal = () => {
    addToFavorite();
  };

  return (
    <>
      <ModalButtonWrapper>
        <a href="tel:+380971234567" target="_blank" rel="noopener noreferrer">
          {' '}
          <ModalButtonContact>
            <ModalButtonText>Contact</ModalButtonText>
          </ModalButtonContact>
        </a>
        <ModalButtonAdd onClick={addToFavoriteModal}>
          <ModalButtonTextAdd>{icon ? 'Delete from' : 'Add to'}</ModalButtonTextAdd>
          <FavoriteHeartIcon />
        </ModalButtonAdd>
      </ModalButtonWrapper>
    </>
  );
};

ModalButtons.propTypes = {
  icon: PropTypes.bool,
  addToFavorite: PropTypes.func,
};
