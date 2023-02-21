import React from 'react';
// import { useState } from 'react';
import {
  ButtonWrapper,
  ButtonLearnMore,
  ButtonText,
  ButtonDelete,
  ButtonTextDelete,
} from './NoticeButtons.styled';
import { DeleteNoticeIcon } from '../../icons/DeleteNoticeIcon';
import { showModal } from '../../../redux/notices/modalSlice';
import { useDispatch } from 'react-redux';

export const NoticeButtons = () => {
  const dispatch = useDispatch();
 
  const handleShowModal = () => {
    dispatch(showModal());
  };

  return (
    <>
      <ButtonWrapper>
        <ButtonLearnMore onClick={handleShowModal}>
          <ButtonText>Learn More</ButtonText>
        </ButtonLearnMore>

        <ButtonDelete>
          <ButtonTextDelete>Delete</ButtonTextDelete>
          <DeleteNoticeIcon />
        </ButtonDelete>
      </ButtonWrapper>
    </>
  );
};
