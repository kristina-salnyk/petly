import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { updateUser } from '../../redux/auth/operations';
import { useState, useEffect } from 'react';
import {
  InfoList,
  InfoItem,
  InfoLabel,
  FlexWrapper,
  InfoInput,
  InfoBtn,
} from './UserDataItem.styled';
import theme from '../../utils/theme';
import { EditProfileInfoPenIcon } from '../../components/icons/EditProfileInfoPenIcon';
import { EditProfileInfoTick } from '../../components/icons/EditProfileInfoTick';

export const UserDataItem = ({ user }) => {
  const [isNameDisabled, setIsNameDisabled] = useState(true);
  const [isEmaillDisabled, setIsEmailDisabled] = useState(true);
  const [isBirthdayDisabled, setIsBirthdayDisabled] = useState(true);
  const [isPhoneDisabled, setIsPhoneDisabled] = useState(true);
  const [isCityDisabled, setIsCityDisabled] = useState(true);
  const [iconColor, setIconColor] = useState(`${theme.colors.accent}`);

  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userBirthday, setUserBirthday] = useState('');
  const [userPhone, setUserPhone] = useState('');
  const [userCity, setUserCity] = useState('');

  const dispatch = useDispatch();

  const { name = '', email = '', birthday = '', phone = '', city = '' } = user;

  const handleValueChange = e => {
    const { name, value } = e.currentTarget;

    switch (name) {
    case 'userName':
      setUserName(value);
      break;

    case 'userEmail':
      setUserEmail(value);
      break;

    case 'userBirthday':
      setUserBirthday(value);
      break;

    case 'userPhone':
      setUserPhone(value);
      break;

    case 'userCity':
      setUserCity(value);
      break;

    default:
      return;
    }
  };

  const handlePencilClick = (e, userValue, isDisabled, setIsDisabled) => {
    const { value } = e.currentTarget.attributes.name;
    if (isDisabled) {
      setIsDisabled(false);
      setIconColor(`${theme.colors.dark}`);
    } else {
      dispatch(updateUser({ [value]: userValue }));
      setIsDisabled(true);
      setIconColor(`${theme.colors.accent}`);
    }
  };

  useEffect(() => {
    setUserName(name);
    setUserEmail(email);
    setUserBirthday(birthday);
    setUserPhone(phone);
    setUserCity(city);
  }, [birthday, city, email, name, phone]);

  return (
    <InfoList>
      <InfoItem>
        <InfoLabel>
          Name:
          <FlexWrapper>
            <InfoInput
              type="text"
              name="userName"
              disabled={isNameDisabled}
              onChange={handleValueChange}
              value={userName}
              autoComplete="off"
            />
            <InfoBtn
              type="submit"
              name="name"
              onClick={e => handlePencilClick(e, userName, isNameDisabled, setIsNameDisabled)}
            >
              {isNameDisabled ? (
                <EditProfileInfoPenIcon color={iconColor} />
              ) : (
                <EditProfileInfoTick color={theme.colors.accent} />
              )}
            </InfoBtn>
          </FlexWrapper>
        </InfoLabel>
      </InfoItem>
      <InfoItem>
        <InfoLabel>
          Email:
          <FlexWrapper>
            <InfoInput
              type="text"
              name="userEmail"
              disabled={isEmaillDisabled}
              onChange={handleValueChange}
              value={userEmail}
              autoComplete="off"
            />
            <InfoBtn
              name="email"
              type="submit"
              onClick={e => handlePencilClick(e, userEmail, isEmaillDisabled, setIsEmailDisabled)}
            >
              {isEmaillDisabled ? (
                <EditProfileInfoPenIcon color={iconColor} />
              ) : (
                <EditProfileInfoTick color={theme.colors.accent} />
              )}
            </InfoBtn>
          </FlexWrapper>
        </InfoLabel>
      </InfoItem>
      <InfoItem>
        <InfoLabel>
          Birthday:
          <FlexWrapper>
            <InfoInput
              type="text"
              name="userBirthday"
              disabled={isBirthdayDisabled}
              onChange={handleValueChange}
              value={userBirthday}
              autoComplete="off"
            />
            <InfoBtn
              type="submit"
              name="birthday"
              onClick={e =>
                handlePencilClick(e, userBirthday, isBirthdayDisabled, setIsBirthdayDisabled)
              }
            >
              {isBirthdayDisabled ? (
                <EditProfileInfoPenIcon color={iconColor} />
              ) : (
                <EditProfileInfoTick color={theme.colors.accent} />
              )}
            </InfoBtn>
          </FlexWrapper>
        </InfoLabel>
      </InfoItem>
      <InfoItem>
        <InfoLabel>
          Phone:
          <FlexWrapper>
            <InfoInput
              type="text"
              name="userPhone"
              disabled={isPhoneDisabled}
              onChange={handleValueChange}
              value={userPhone}
              autoComplete="off"
            />
            <InfoBtn
              type="submit"
              name="phone"
              onClick={e => handlePencilClick(e, userPhone, isPhoneDisabled, setIsPhoneDisabled)}
            >
              {isPhoneDisabled ? (
                <EditProfileInfoPenIcon color={iconColor} />
              ) : (
                <EditProfileInfoTick color={theme.colors.accent} />
              )}
            </InfoBtn>
          </FlexWrapper>
        </InfoLabel>
      </InfoItem>
      <InfoItem>
        <InfoLabel>
          City:
          <FlexWrapper>
            <InfoInput
              type="text"
              name="userCity"
              disabled={isCityDisabled}
              onChange={handleValueChange}
              value={userCity}
              autoComplete="off"
            />
            <InfoBtn
              type="sumbit"
              name="city"
              onClick={e => handlePencilClick(e, userCity, isCityDisabled, setIsCityDisabled)}
            >
              {isCityDisabled ? (
                <EditProfileInfoPenIcon color={iconColor} />
              ) : (
                <EditProfileInfoTick color={theme.colors.accent} />
              )}
            </InfoBtn>
          </FlexWrapper>
        </InfoLabel>
      </InfoItem>
    </InfoList>
  );
};

UserDataItem.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string,
    email: PropTypes.string,
    city: PropTypes.string,
    phone: PropTypes.string,
    birthday: PropTypes.string,
  }),
};
