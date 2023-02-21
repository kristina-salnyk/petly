import React from 'react';
import {
  ModalInfoWrapper,
  ModalInfoList,
  ModalInfoTitle,
  ModalInfoField,
  ModalInfoName,
  ModalInfoValue,
} from './ModalInfo.styled';

export const ModalInfo = () => {
  return (
    <>
      <ModalInfoWrapper>
        <ModalInfoList>
          <ModalInfoTitle>Сute dog looking for a home</ModalInfoTitle>

          <ModalInfoField>
            <ModalInfoName>Name:</ModalInfoName>
            <ModalInfoValue>Rich</ModalInfoValue>
          </ModalInfoField>
          <ModalInfoField>
            <ModalInfoName>Birthday:</ModalInfoName>
            <ModalInfoValue>21.09.2020</ModalInfoValue>
          </ModalInfoField>
          <ModalInfoField>
            <ModalInfoName>Breed:</ModalInfoName>
            <ModalInfoValue>Pomeranian</ModalInfoValue>
          </ModalInfoField>
          <ModalInfoField>
            <ModalInfoName>Location:</ModalInfoName>
            <ModalInfoValue>Lviv</ModalInfoValue>
          </ModalInfoField>
          <ModalInfoField>
            <ModalInfoName>The sex:</ModalInfoName>
            <ModalInfoValue>male</ModalInfoValue>
          </ModalInfoField>
          <ModalInfoField>
            <ModalInfoName>Email:</ModalInfoName>
            <ModalInfoValue>user@mail.com</ModalInfoValue>
          </ModalInfoField>
          <ModalInfoField>
            <ModalInfoName>Phone:</ModalInfoName>
            <ModalInfoValue>+380971234567</ModalInfoValue>
          </ModalInfoField>

        </ModalInfoList>
      </ModalInfoWrapper>
    </>
  );
};
