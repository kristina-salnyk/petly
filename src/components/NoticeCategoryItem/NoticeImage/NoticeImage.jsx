import React from 'react';
import PropTypes from 'prop-types';
import {
  ImageThumb,
  ImageCard,
  InfoWrapper,
  CategoryLabel,
  FavoriteLabel,
  LabelText,
} from './NoticeImage.styled';
import { FavoriteHeartIcon } from '../../icons/FavoriteHeartIcon';

export const NoticeImage = ({ category, image }) => {
 
  return (
    <>
      <ImageThumb>
        <ImageCard src={image} alt={category} />
        <InfoWrapper>
          <CategoryLabel>
            <LabelText>{category}</LabelText>
          </CategoryLabel>
          <FavoriteLabel>
            <FavoriteHeartIcon />
          </FavoriteLabel>
        </InfoWrapper>
      </ImageThumb>
    </>
  );
};

NoticeImage.propTypes = {
  category: PropTypes.string,
  image: PropTypes.string,
};
