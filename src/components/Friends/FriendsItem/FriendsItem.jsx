import PropTypes from 'prop-types';
import { useState } from 'react';

import {
  SponsorLink,
  FriendCard,
  Time,
  Text,
  ContactLink,
  Img,
  SponsorItem,
  TextWrapper,
  List,
  AddresLink,
  ItemWraper
} from './FriendsItem.styled';
import FriendsTimeTable from './FriendsShedule';
import defaultImage from '../../../images/defaultImage.png';

const FriendsItem = ({
  title,
  website,
  location,
  imageUrl = defaultImage,
  address,
  workDays,
  phone,
  email,
}) => {
  const [isVisible, setIsVisible] = useState(true);

  const week = ['MN', 'TU', 'WE', 'TH', 'FR', 'SA', 'SU'];
  const newWorkDays =
    workDays &&
    workDays.map((day, index) => {
      return { day: week[index], ...day };
    });

  return (
    <SponsorItem>
      <ItemWraper>
        <SponsorLink href={website} target="_blank">
        {title}
      </SponsorLink>
      <FriendCard>
        <Img src={imageUrl ?? defaultImage} alt={title} />
        <List>
          <TextWrapper
            onClick={() => {
              setIsVisible(!isVisible);
            }}
            onMouseLeave={() => {
              setTimeout(() => {
                setIsVisible(true);
              }, 1000);
            }}
          >
            {workDays === null || workDays === undefined || workDays.length === 0 ? (
              <>
                <Text>Time: </Text>
                <Text>-------------</Text>
              </>
            ) : (
              <>
                {' '}
                {workDays.isOpen ? (
                  <>
                    <Text>Time:</Text>
                    <Time>
                      {workDays.from}-{workDays.to}
                    </Time>
                  </>
                ) : (
                  <>
                    <Text>Time:</Text>
                    <Time>Closed</Time>
                  </>
                )}
                {isVisible || <FriendsTimeTable shedule={newWorkDays} />}
              </>
            )}
          </TextWrapper>
          <TextWrapper>
            <Text>Adress:</Text>
            {location ? (
              <AddresLink href={location} target="_blank">
                {address}
              </AddresLink>
            ) : (
              <Text>-------------</Text>
            )}
          </TextWrapper>
          <TextWrapper>
            <Text>Email:</Text>
            {email ? (
              <ContactLink href={`mailto:${email}`}>{email}</ContactLink>
            ) : (
              <Text>-------------</Text>
            )}
          </TextWrapper>
          <TextWrapper>
            <Text>Phone:</Text>
            {phone ? (
              <ContactLink href={`tel:${phone}`}>{phone}</ContactLink>
            ) : (
              <Text>-------------</Text>
            )}
          </TextWrapper>
        </List>
      </FriendCard>
      </ItemWraper>
    </SponsorItem>
  );
};

export default FriendsItem;

FriendsItem.propTypes = {
  title: PropTypes.string,
  website: PropTypes.string,
  location:PropTypes.string,
  imageUrl:PropTypes.string,
  address: PropTypes.string,
  workDays: PropTypes.array,
  phone: PropTypes.number,
  email: PropTypes.string
}