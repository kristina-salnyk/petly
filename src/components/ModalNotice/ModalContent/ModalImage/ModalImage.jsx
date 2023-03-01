import React from 'react';
import PropTypes from 'prop-types';
import {
  ImageModal,
  ImageThumb,
  LabelText,
  LabelWrapper as LabelWrapper,
  ModalLabel,
} from './ModalImage.styled';

export const ModalImage = ({ category, image }) => {
  return (
    <>
      <ImageThumb>
        <ImageModal src={image} alt={category} />
        <LabelWrapper>
          <ModalLabel>
            <LabelText>
              {category?.replaceAll('-', category === 'lost-found' ? '/' : ' ')}
            </LabelText>
          </ModalLabel>
        </LabelWrapper>
      </ImageThumb>
    </>
  );
};

ModalImage.propTypes = {
  category: PropTypes.string,
  image: PropTypes.string,
};
