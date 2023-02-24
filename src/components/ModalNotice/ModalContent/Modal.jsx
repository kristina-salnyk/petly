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
import { selectNoticeItem } from '../../../redux/notices/selectors';
import { useSelector } from 'react-redux';

export const Modal = ({id,onShow}) => {
  const noticesItem = useSelector(selectNoticeItem);

  return (
    <>
      <ModalThumb>
        <CloseModalButton onClick={onShow}>
          <CloseModalIcon width={30} fill={theme.colors.black} />
        </CloseModalButton>

        <TabletWrapper>
          <ModalImage category={noticesItem.category} image={noticesItem.image} />

          <ModalInfo
            category={noticesItem.category}
            title={noticesItem.title}
            name={noticesItem.name}
            gender={noticesItem.gender}
            location={noticesItem.location}
            birthday={noticesItem.birthday}
            breed={noticesItem.breed}
            price={noticesItem.price}
          />
        </TabletWrapper>

        <ModalComments>
          <ModalCommentsName>Comments:</ModalCommentsName>{' '}
          <ModalCommentsText>{noticesItem.comments}</ModalCommentsText>
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
  onShow: PropTypes.func,
};
