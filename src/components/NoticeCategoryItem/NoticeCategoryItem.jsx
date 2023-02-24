import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { NoticeImage } from './NoticeImage/NoticeImage';
import { NoticeButtons } from './NoticeButtons/NoticeButtons';
import { NoticeCard } from './NoticeCategoryItem.styled';
import { NoticeInfo } from './NoticeInfo/NoticeInfo';
import { fetchNoticeItem } from '../../redux/notices/operations';
import { useDispatch } from 'react-redux';
import { ModalNotice } from '../ModalNotice/ModalNotice';

export const NoticeCategoryItem = ({
  _id,
  category,
  title,
  breed,
  location,
  price,
  image,
  birthday,
  owner,
}) => {
  const [modalOpen, setModalOpen] = useState(false);
  const dispatch = useDispatch();

  const onShow = () => {
    if (!modalOpen) {
      dispatch(fetchNoticeItem(_id));
    }
    setModalOpen(!modalOpen);
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
        <NoticeButtons id={_id} owner={owner} onShow={onShow} />

        {modalOpen && <ModalNotice id={_id} onShow={onShow} />}
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
  owner: PropTypes.string,
};
