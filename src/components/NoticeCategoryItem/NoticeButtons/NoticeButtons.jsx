import React from 'react';
import PropTypes from 'prop-types';
import {
  ButtonWrapper,
  ButtonLearnMore,
  ButtonText,
  ButtonDelete,
  ButtonTextDelete,
} from './NoticeButtons.styled';
import { useSelector, useDispatch } from 'react-redux';
import { deleteNotice } from '../../../redux/notices/operations';
import { selectUser } from '../../../redux/auth/selectors';
import { DeleteNoticeIcon } from '../../icons/DeleteNoticeIcon';


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
