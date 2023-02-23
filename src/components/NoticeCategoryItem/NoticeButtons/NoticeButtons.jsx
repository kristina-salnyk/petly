import React from 'react';
import PropTypes from 'prop-types';
import {
  ButtonWrapper,
  ButtonLearnMore,
  ButtonText,
  ButtonDelete,
  ButtonTextDelete,
} from './NoticeButtons.styled';
import { DeleteNoticeIcon } from '../../icons/DeleteNoticeIcon';
import { useSelector } from 'react-redux';
import {selectIsLoggedIn} from '../../../redux/auth/selectors';

export const NoticeButtons = ({onShow}) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
 
 
  return (
    <>
      <ButtonWrapper>
        <ButtonLearnMore onClick={onShow}>
          <ButtonText>Learn More</ButtonText>
        </ButtonLearnMore>

        {isLoggedIn && (
          <ButtonDelete>
            <ButtonTextDelete>Delete</ButtonTextDelete>
            <DeleteNoticeIcon />
          </ButtonDelete>
        )}
      </ButtonWrapper>
    </>
  );
};


NoticeButtons.propTypes = {
  onShow: PropTypes.func,
};
