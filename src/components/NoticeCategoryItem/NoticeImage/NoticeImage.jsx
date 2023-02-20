import React from 'react';
import {
  ImageCard,
  InfoWrapper,
  CategoryLabel,
  FavoriteLabel,
  LabelText,
} from './NoticeImage.styled';
import {FavoriteHeartIcon} from '../../icons/FavoriteHeartIcon';

export const NoticeImage = () => {
  return (
    <>
      <ImageCard>
        <InfoWrapper>
          <CategoryLabel>
            <LabelText>in good hands</LabelText>
          </CategoryLabel>
          <FavoriteLabel>
            <FavoriteHeartIcon />
          </FavoriteLabel>
        </InfoWrapper>
      </ImageCard>
    </>
  );
};
