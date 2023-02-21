import React from 'react';
import {
  ButtonWrapper,
  ButtonLearnMore,
  ButtonText,
  ButtonDelete,
  ButtonTextDelete,
} from './NoticeButtons.styled';
import {DeleteNoticeIcon} from '../../icons/DeleteNoticeIcon';

export const NoticeButtons = () => {
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
