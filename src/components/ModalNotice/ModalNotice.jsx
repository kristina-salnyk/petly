import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Modal } from './ModalContent/Modal';
import { ModalWrapper, ModalOverlay } from './ModalNotice.styled';
import { useDispatch } from 'react-redux';
import { changeModal } from '../../redux/modal/slice';
import { useRef } from 'react';

export const ModalNotice = ({
  id,
  category,
  image,
  title,
  name,
  gender,
  location,
  birthday,
  breed,
  price,
  comments,
  onClose,
}) => {
  const dispatch = useDispatch();
  const modalRef = useRef();

  useEffect(() => {
    const handleEsc = event => {
      if (event.keyCode === 27) {
        dispatch(changeModal());
        onClose();
      }
    };
    window.addEventListener('keydown', handleEsc);

    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, []);

  function handleOverlayClick(event) {
    if (event.target === modalRef.current) {
      onClose();
    }
  }

  return (
    <>
      <ModalOverlay onClick={handleOverlayClick} ref={modalRef}>
        <ModalWrapper>
          <Modal
            id={id}
            category={category}
            image={image}
            title={title}
            name={name}
            gender={gender}
            location={location}
            birthday={birthday}
            breed={breed}
            price={price}
            comments={comments}
            onClose={onClose}
          />
        </ModalWrapper>
      </ModalOverlay>
    </>
  );
};

ModalNotice.propTypes = {
  id: PropTypes.string,
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
  onClose: PropTypes.func,
};
