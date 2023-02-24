import React from 'react';
import PropTypes from 'prop-types';
import {
  ButtonWrapper,
  ButtonLearnMore,
  ButtonText,
  ButtonDelete,
  ButtonTextDelete,
} from './NoticeButtons.styled';
import { useSelector } from 'react-redux';
import { selectUser } from '../../../redux/auth/selectors';
import { useDispatch } from 'react-redux';
import { DeleteNoticeIcon } from '../../icons/DeleteNoticeIcon';
import { deleteNotice } from '../../../redux/notices/operations';

export const NoticeButtons = ({ id, owner, onShow }) => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  const deleteMyNotice = () => {
    dispatch(deleteNotice(id));
  };

  return (
    <>
      <ButtonWrapper>
        <ButtonLearnMore onClick={onShow}>
          <ButtonText>Learn More</ButtonText>
        </ButtonLearnMore>

        {user.id === owner && (
          <ButtonDelete onClick={deleteMyNotice}>
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
  owner: PropTypes.string,
  onShow: PropTypes.func,
};
