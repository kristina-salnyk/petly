import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { NoticeImage } from './NoticeImage/NoticeImage';
import { NoticeButtons } from './NoticeButtons/NoticeButtons';
import { NoticeCard } from './NoticeCategoryItem.styled';
import { NoticeInfo } from './NoticeInfo/NoticeInfo';

import { ModalNotice } from '../ModalNotice/ModalNotice';

export const NoticeCategoryItem = ({
  _id,
  category,
  title,
  name,
  breed,
  location,
  gender,
  price,
  image,
  birthday,
  comments,
}) => {
  const [modalOpen, setModalOpen] = useState(false);

  const onShow = () => {
    return setModalOpen(true);
  };

  const onClose = () => {
    return setModalOpen(false);
  };

  useEffect(() => {
    if (modalOpen) {
      document.body.classList.add('modal-open');
    } else {
      document.body.classList.remove('modal-open');
    }

    return () => {
      document.body.classList.remove('modal-open');
    };
  }, [modalOpen]);

  return (
    <>
      <NoticeCard>
        <NoticeImage id={_id} category={category} image={image} />

        <NoticeInfo
          category={category}
          title={title}
          location={location}
          birthday={birthday}
          breed={breed}
          price={price}
        />
        <NoticeButtons id={_id} onShow={onShow} />

        {modalOpen && (
          <ModalNotice
            id={_id}
            name={name}
            category={category}
            image={image}
            title={title}
            gender={gender}
            location={location}
            birthday={birthday}
            breed={breed}
            price={price}
            comments={comments}
            onClose={onClose}
          />
        )}
      </NoticeCard>
    </>
  );
};
// li item

NoticeCategoryItem.propTypes = {
  _id: PropTypes.string,
  category: PropTypes.string,
  name: PropTypes.string,
  title: PropTypes.string,
  breed: PropTypes.string,
  gender: PropTypes.string,
  location: PropTypes.string,
  price: PropTypes.string,
  image: PropTypes.string,
  birthday: PropTypes.string,
  comments: PropTypes.string,
};
