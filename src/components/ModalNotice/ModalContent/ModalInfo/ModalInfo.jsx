import React from 'react';
import PropTypes from 'prop-types';
import {
  ModalInfoWrapper,
  ModalInfoList,
  ModalInfoTitle,
  ModalInfoName,
  ModalInfoValue,
  ModalInfoLink,
} from './ModalInfo.styled';
// import { dateFormatting } from '../../../../utils/date';

export const ModalInfo = ({ category, title, name, location, gender, birthday, breed, price }) => {
  return (
    <>
      <ModalInfoWrapper>
        <ModalInfoTitle>{title}</ModalInfoTitle>
        <ModalInfoList>
          <ModalInfoName>Name:</ModalInfoName>
          <ModalInfoValue>{name}</ModalInfoValue>

          <ModalInfoName>Birthday:</ModalInfoName>
          <ModalInfoValue>{birthday}</ModalInfoValue>

          <ModalInfoName>Breed:</ModalInfoName>
          <ModalInfoValue>{breed}</ModalInfoValue>

          <ModalInfoName>Location:</ModalInfoName>
          <ModalInfoValue>{location}</ModalInfoValue>

          <ModalInfoName>The sex:</ModalInfoName>
          <ModalInfoValue>{gender}</ModalInfoValue>

          <ModalInfoName>Email:</ModalInfoName>

          <ModalInfoValue>
            <ModalInfoLink href="https://www.google.com/intl/en/gmail/about/" target={'_blank'}>
              user@mail.com
            </ModalInfoLink>
          </ModalInfoValue>

          <ModalInfoName>Phone:</ModalInfoName>

          <ModalInfoValue>
            <ModalInfoLink href="tel:+380971234567" target={'_blank'}>
              +380971234567
            </ModalInfoLink>
          </ModalInfoValue>
          {category === 'sell' && (
            <>
              {' '}
              <ModalInfoName>Price:</ModalInfoName>
              <ModalInfoValue>{price}$</ModalInfoValue>
            </>
          )}
        </ModalInfoList>
      </ModalInfoWrapper>
    </>
  );
};

ModalInfo.propTypes = {
  category: PropTypes.string,
  title: PropTypes.string,
  name: PropTypes.string,
  breed: PropTypes.string,
  gender: PropTypes.string,
  location: PropTypes.string,
  price: PropTypes.string,
  birthday: PropTypes.string,
};
