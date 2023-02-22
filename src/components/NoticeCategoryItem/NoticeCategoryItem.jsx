import React from 'react';
import PropTypes from 'prop-types';

import { NoticeImage } from './NoticeImage/NoticeImage';
import { NoticeButtons } from './NoticeButtons/NoticeButtons';
import { NoticeCard } from './NoticeCategoryItem.styled';
import { NoticeInfo } from './NoticeInfo/NoticeInfo';

export const NoticeCategoryItem = ({_id,
  category,
  title,
  breed,
  location,
  price,
  image,
  birthday,
}) => {
  
  return (
    <NoticeCard>
      <NoticeImage category={category} image={image} />
      <NoticeInfo
        category={category}
        title={title}
        location={location}
        birthday={birthday}
        breed={breed}
        price={price}
      />
      <NoticeButtons id={_id} />
    </NoticeCard>
  );
};
// li item

NoticeCategoryItem.propTypes = {
  _id: PropTypes.string,
  category: PropTypes.string,
  title: PropTypes.string,
  breed: PropTypes.string,
  location: PropTypes.string,
  price: PropTypes.string,
  image: PropTypes.string,
  birthday: PropTypes.string,
};
