import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Notiflix from 'notiflix';
import { useDispatch, useSelector } from 'react-redux';
import { NoticeImage } from './NoticeImage/NoticeImage';
import { NoticeButtons } from './NoticeButtons/NoticeButtons';
import { NoticeCard } from './NoticeCategoryItem.styled';
import { NoticeInfo } from './NoticeInfo/NoticeInfo';
import { addFavorite, deleteFavorite, fetchNoticeItem } from '../../redux/notices/operations';
import { ModalNotice } from '../ModalNotice/ModalNotice';
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import { clearNoticeItem } from '../../redux/notices/slice';

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
  favorite = false,
}) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  const [modalOpen, setModalOpen] = useState(false);

  const dispatch = useDispatch();

  const addToFavorite = () => {
    if (!isLoggedIn) {
      Notiflix.Notify.warning('Please sign in');
      return;
    }
    if (favorite) {
      dispatch(deleteFavorite(_id));
      return;
    }
    dispatch(addFavorite(_id));
  };

  const onShow = () => {
    if (modalOpen) {
      dispatch(clearNoticeItem());
    } else {
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
        <NoticeImage
          icon={favorite}
          addToFavorite={addToFavorite}
          category={category}
          image={image}
        />

        <NoticeInfo
          category={category}
          title={title}
          location={location}
          birthday={birthday}
          breed={breed}
          price={price}
        />
        <NoticeButtons id={_id} owner={owner} onShow={onShow} />

        {modalOpen && <ModalNotice icon={favorite} addToFavorite={addToFavorite} onShow={onShow} />}
      </NoticeCard>
    </>
  );
};

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
  favorite: PropTypes.bool,
};
