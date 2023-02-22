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
import { changeModal } from '../../../redux/modal/slice';
import { useDispatch } from 'react-redux';

export const NoticeButtons = () => {
  const dispatch = useDispatch();

  const handleModalChange = () => {
    dispatch(changeModal());
  };

  return (
    <>
      <ButtonWrapper>
        <ButtonLearnMore onClick={handleModalChange}>
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
