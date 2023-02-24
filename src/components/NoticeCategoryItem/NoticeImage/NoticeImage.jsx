import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Notiflix from 'notiflix';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import {
  ImageThumb,
  ImageCard,
  InfoWrapper,
  CategoryLabel,
  FavoriteLabel,
  LabelText,
} from './NoticeImage.styled';

import { FavoriteHeartIcon } from '../../icons/FavoriteHeartIcon';
import { selectIsLoggedIn } from '../../../redux/auth/selectors';
import { addFavorite } from '../../../redux/notices/operations';

import theme from '../../../utils/theme';

export const NoticeImage = ({ id, category, image }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const dispatch = useDispatch();

  const [favorite, setFavorite] = useState(false);

  const addToFavorite = () => {
    if (!isLoggedIn) {
      Notiflix.Notify.warning('Please sign in');
      return;
    }
    dispatch(addFavorite(id));
    console.log('add to favorite');
    return setFavorite(!favorite);
  };

  return (
    <>
      <ImageThumb>
        <ImageCard src={image} alt={category} />
        <InfoWrapper>
          <CategoryLabel>
            <LabelText>{category}</LabelText>
          </CategoryLabel>
          <FavoriteLabel onClick={addToFavorite}>
            <FavoriteHeartIcon fill={favorite ? theme.colors.accent : theme.colors.light} />
          </FavoriteLabel>
        </InfoWrapper>
      </ImageThumb>
    </>
  );
};

NoticeImage.propTypes = {
  id: PropTypes.string.isRequired,
  category: PropTypes.string,
  image: PropTypes.string,
};
