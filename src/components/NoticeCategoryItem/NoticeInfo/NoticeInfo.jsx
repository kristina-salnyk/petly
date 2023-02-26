import React from 'react';
import { differenceInYears  } from 'date-fns';
import PropTypes from 'prop-types';
import {
  CardInfoWrapper,
  CardInfoList,
  CardInfoTitle,
  CardInfoName,
  CardInfoValue,
} from './NoticeInfo.styled';

export const NoticeInfo = ({ title, breed, location, birthday, price, category }) => {
  const parts = birthday.split('.');
  const year = parts[2];
  const month = parts[1] - 1;
  const day = parts[0];
  const date = new Date(year, month, day);
  const isoDate = date.toISOString().slice(0, 10);
  
  const age = differenceInYears(new Date(), new Date(isoDate) );

  return (
    <>
      <CardInfoWrapper>
        <CardInfoTitle>{title}</CardInfoTitle>
        <CardInfoList>
          <CardInfoName>Breed:</CardInfoName>
          <CardInfoValue>{breed}</CardInfoValue>

          <CardInfoName>Place:</CardInfoName>
          <CardInfoValue>{location}</CardInfoValue>

          <CardInfoName>Age:</CardInfoName>
          <CardInfoValue>{(age <= 1) ? 'One year' : `${age} years`}</CardInfoValue>

          {category === 'sell' && (
            <>
              {' '}
              <CardInfoName>Price:</CardInfoName>
              <CardInfoValue>{price}$</CardInfoValue>
            </>
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
