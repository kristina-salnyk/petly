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

export const ModalInfo = ({ category, title, name, location, gender, birthday, breed, price, email, phone }) => {
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
              {email}
            </ModalInfoLink>
          </ModalInfoValue>

          <ModalInfoName>Phone:</ModalInfoName>

          <ModalInfoValue>
            <ModalInfoLink href={`tel:${phone}`} target={'_blank'}>
              {phone}
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
  email: PropTypes.string,
  phone: PropTypes.string,
};
