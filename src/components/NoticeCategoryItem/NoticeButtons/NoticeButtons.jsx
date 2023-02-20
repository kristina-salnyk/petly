import React from 'react';
// import { useState } from 'react';
import {
  ButtonWrapper,
  ButtonLearnMore,
  ButtonText,
  ButtonDelete,
  ButtonTextDelete,
} from './NoticeButtons.styled';
import {DeleteNoticeIcon} from '../../icons/DeleteNoticeIcon';

export const NoticeButtons = () => {
  // const [isOpen, setIsOpen] = useState(false);
  // const modalOpen = () => {
  //   setIsOpen(true);
  // };


  return (
    <>
      <ButtonWrapper>
        <ButtonLearnMore>
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
