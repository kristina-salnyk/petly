import React from 'react';
import { ModalImage } from './ModalImage/ModalImage';
import { ModalInfo } from './ModalInfo/ModalInfo';
import { ModalButtons } from './ModalButtons/ModalButtons';
import {
  ModalThumb,
  CloseModalButton,
  TabletWrapper,
  ModalComments,
  ModalCommentsName,
  ModalCommentsText,
} from './Modal.styled';
import { CloseModalIcon } from '../../icons/CloseModalIcon';
import theme from '../../../utils/theme';
import { useDispatch } from 'react-redux';
import { changeModal } from '../../../redux/modal/slice';

export const Modal = () => {
  const dispatch = useDispatch();

  const handleModalChange = () => {
    dispatch(changeModal());
  };

  return (
    <>
      <ModalThumb>
        <CloseModalButton onClick={handleModalChange}>
          <CloseModalIcon width={30} fill={theme.colors.black} />
        </CloseModalButton>

        <TabletWrapper>
          <ModalImage />

          <ModalInfo />
        </TabletWrapper>

        <ModalComments>
          <ModalCommentsName>Comments:</ModalCommentsName>{' '}
          <ModalCommentsText>
            Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur Lorem
            ipsum dolor sit amet, consectetur Lorem
          </ModalCommentsText>
        </ModalComments>

        <ModalButtons />
      </ModalThumb>
    </>
  );
};
