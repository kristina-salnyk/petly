import React from 'react';
import { ImageThumb, LableWrapper, ModalLabel, LabelText } from './ModalImage.styled';

export const ModalImage = () => {
  return (
    <>
      <ImageThumb>
        <LableWrapper>
          <ModalLabel>
            <LabelText>in good hands</LabelText>
          </ModalLabel>
        </LableWrapper>
      </ImageThumb>
    </>
  );
};
