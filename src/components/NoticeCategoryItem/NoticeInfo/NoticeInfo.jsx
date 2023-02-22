import React from 'react';
import PropTypes from 'prop-types';
import {
  CardInfoWrapper,
  CardInfoList,
  CardInfoTitle,
  CardInfoField,
  CardInfoName,
  CardInfoValue,
} from './NoticeInfo.styled';

export const NoticeInfo = ({ title, breed, location, birthday, price, category }) => {
  return (
    <>
      <CardInfoWrapper>
        <CardInfoList>
          <CardInfoTitle>{title}</CardInfoTitle>
          <CardInfoField>
            <CardInfoName>Breed:</CardInfoName>
            <CardInfoValue>{breed}</CardInfoValue>
          </CardInfoField>
          <CardInfoField>
            <CardInfoName>Place:</CardInfoName>
            <CardInfoValue>{location}</CardInfoValue>
          </CardInfoField>
          <CardInfoField>
            <CardInfoName>Age:</CardInfoName>
            <CardInfoValue>{birthday}</CardInfoValue>
          </CardInfoField>
          {category === 'sell' && (
            <CardInfoField>
              <CardInfoName>Price:</CardInfoName>
              <CardInfoValue>{price}</CardInfoValue>
            </CardInfoField>
          )}
        </CardInfoList>
      </CardInfoWrapper>
    </>
  );
};

NoticeInfo.propTypes = {
  category: PropTypes.string,
  title: PropTypes.string,
  breed: PropTypes.string,
  location: PropTypes.string,
  price: PropTypes.string,

  birthday: PropTypes.string,
};
