import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
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
import { selectNoticeItem } from '../../../redux/notices/selectors';
import { CloseModalIcon } from '../../icons/CloseModalIcon';
import theme from '../../../utils/theme';



export const Modal = ({ icon, addToFavorite, onShow}) => {
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
            email={noticesItem.email}
            phone={noticesItem.phone}
          />
        </TabletWrapper>

        <ModalComments>
          <ModalCommentsName>Comments:</ModalCommentsName>{' '}
          <ModalCommentsText>{noticesItem.comments}</ModalCommentsText>
        </ModalComments>

        <ModalButtons icon={icon} addToFavorite={addToFavorite} />
      </ModalThumb>
    </>
  );
};

Modal.propTypes = {
  onShow: PropTypes.func,
  icon: PropTypes.bool,
  addToFavorite: PropTypes.func,
};
