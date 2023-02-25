import React from 'react';
// import { differenceInYears  } from 'date-fns';
import PropTypes from 'prop-types';
import {
  CardInfoWrapper,
  CardInfoList,
  CardInfoTitle,
  CardInfoName,
  CardInfoValue,
} from './NoticeInfo.styled';

export const NoticeInfo = ({ title, breed, location, birthday, price, category }) => {

  // const age = differenceInYears(new Date(), birthday );

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
          <CardInfoValue>{birthday}</CardInfoValue>

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

