import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {
  ImageThumb,
  ImageCard,
  InfoWrapper,
  CategoryLabel,
  FavoriteLabel,
  LabelText,
} from './NoticeImage.styled';
import Notiflix from 'notiflix';
import { FavoriteHeartIcon } from '../../icons/FavoriteHeartIcon';
import { selectIsLoggedIn } from '../../../redux/auth/selectors';
import { useSelector } from 'react-redux';
import theme from '../../../utils/theme';

export const NoticeImage = ({ id, category, image }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  const [favorite, setFavorite] = useState(false);

  const addToFavorite = () => {
    if (!isLoggedIn) {
      Notiflix.Notify.warning('Please sign in');
      return;
    }
    console.log(id);
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
          <FavoriteLabel  onClick={addToFavorite}>
            <FavoriteHeartIcon fill={favorite ? theme.colors.accent : theme.colors.light } />
          </FavoriteLabel>
        </InfoWrapper>
      </ImageThumb>
    </>
  );
};

NoticeImage.propTypes = {
  id:PropTypes.string.isRequired,
  category: PropTypes.string,
  image: PropTypes.string,
};
