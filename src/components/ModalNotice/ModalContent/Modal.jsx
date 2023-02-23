import React from 'react';
import PropTypes from 'prop-types';
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


export const Modal = ({
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
  onClose
}) => {
 

  return (
    <>
      <ModalThumb>
        <CloseModalButton onClick={onClose}>
          <CloseModalIcon width={30} fill={theme.colors.black} />
        </CloseModalButton>

        <TabletWrapper>
          <ModalImage category={category} image={image} />

          <ModalInfo
            category={category}
            title={title}
            name={name}
            gender={gender}
            location={location}
            birthday={birthday}
            breed={breed}
            price={price}
          />
        </TabletWrapper>

        <ModalComments>
          <ModalCommentsName>Comments:</ModalCommentsName>{' '}
          <ModalCommentsText>{comments}</ModalCommentsText>
        </ModalComments>

        <ModalButtons id={id} />
      </ModalThumb>
    </>
  );
};

Modal.propTypes = {
  id: PropTypes.string,
  category: PropTypes.string,
  title: PropTypes.string,
  name: PropTypes.string,
  breed: PropTypes.string,
  location: PropTypes.string,
  gender: PropTypes.string,
  price: PropTypes.string,
  image: PropTypes.string,
  birthday: PropTypes.string,
  comments: PropTypes.string,
  onClose: PropTypes.func,
};
