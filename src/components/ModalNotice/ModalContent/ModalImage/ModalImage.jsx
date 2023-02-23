import React from 'react';
import PropTypes from 'prop-types';
import {
  ImageThumb,
  ImageModal,
  LabelWrapper as LabelWrapper,
  ModalLabel,
  LabelText,
} from './ModalImage.styled';

export const ModalImage = ({ category, image }) => {
  return (
    <>
      <ImageThumb>
        <ImageModal src={image} alt={category} />
        <LabelWrapper>
          <ModalLabel>
            <LabelText>{category}</LabelText>
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
