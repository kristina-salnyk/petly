import React from 'react';
import { ImageThumb,ImageModal, LabelWrapper as LabelWrapper, ModalLabel, LabelText } from './ModalImage.styled';

export const ModalImage = () => {
  return (
    <>
      <ImageThumb>
        <ImageModal src="https://www.wdc.govt.nz/files/sharedassets/public/image-collection/animals/dog-adopt-baxter.jpg?dimension=pageimage&w=480" alt="sell" />
        <LabelWrapper>
          <ModalLabel>
            <LabelText>in good hands</LabelText>
          </ModalLabel>
        </LabelWrapper>
      </ImageThumb>
    </>
  );
};
