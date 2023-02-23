import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import {
  ModalButtonWrapper,
  ModalButtonContact,
  ModalButtonText,
  ModalButtonAdd,
  ModalButtonTextAdd,
} from './ModalButtons.styled';
import Notiflix from 'notiflix';
import { FavoriteHeartIcon } from '../../../icons/FavoriteInModalHeartIcon';
import { selectIsLoggedIn } from '../../../../redux/auth/selectors';
// import theme from '../../../../utils/theme';

export const ModalButtons = ({id}) => {
  const [favorite, setFavorite] = useState(false);
  const isLoggedIn = useSelector(selectIsLoggedIn);

  const addToFavorite = () => {
    if (!isLoggedIn) {
      console.log(id);
      Notiflix.Notify.warning('Please sign in');
      return;
    }
    return setFavorite(!favorite);
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
        <ModalButtonAdd
          // style={favorite ? { backgroundColor: theme.colors.accent } : null}
          onClick={addToFavorite}
        >
          <ModalButtonTextAdd>{favorite ? 'Added to' :'Add to'}</ModalButtonTextAdd>
          <FavoriteHeartIcon />
        </ModalButtonAdd>
      </ModalButtonWrapper>
    </>
  );
};

ModalButtons.propTypes = {
  id: PropTypes.string,
}