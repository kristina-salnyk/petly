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
import { changeModal } from '../../../redux/modal/slice';
import { useDispatch, useSelector } from 'react-redux';
import {selectIsLoggedIn} from '../../../redux/auth/selectors';

export const NoticeButtons = ({id}) => {
  console.log(id);
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);
 
  const handleModalChange = () => {
    dispatch(changeModal());
    
  };
 
  return (
    <>
      <ButtonWrapper>
        <ButtonLearnMore onClick={handleModalChange}>
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
  id: PropTypes.string,
};
