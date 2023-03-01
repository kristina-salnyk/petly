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

  // const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  // const [active, setActive] = useState(false);

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

  // const handleButtonDisable = () => {
  //   switch (name) {
  //   case 'name':
  //     setIsButtonDisabled(false);
  //     break;

  //   case 'email':
  //     setIsButtonDisabled(false);
  //     break;

  //   case 'birthday':
  //     setIsButtonDisabled(false);
  //     break;

  //   case 'phone':
  //     setIsButtonDisabled(false);
  //     break;

  //   case 'city':
  //     setIsButtonDisabled(false);
  //     break;

  //   default:
  //     return;
  //   }
  // };

  const handlePencilClick = (e, userValue, isDisabled, setIsDisabled) => {
    const { value } = e.currentTarget.attributes.name;

    // setIsButtonDisabled(true);

    if (isDisabled) {
      setIsDisabled(false);
      setIconColor(`${theme.colors.dark}`);

      // setIsButtonDisabled(false);
      // setActive(true);
    }
    // else if (active === false) {
    //   setIsButtonDisabled(true);
    // }
    else {
      dispatch(updateUser({ [value]: userValue }));
      setIsDisabled(true);
      setIconColor(`${theme.colors.accent}`);
      // setIsButtonDisabled(false);
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
              placeholder="Name (Latin alphabet)"
              disabled={isNameDisabled}
              onChange={handleValueChange}
              value={userName}
              autoComplete="off"
            />
            <InfoBtn
              type="submit"
              name="name"
              // disabled={handleButtonDisable(isButtonDisabled)}
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
              type="email"
              name="userEmail"
              placeholder="user@mail.com"
              disabled={isEmaillDisabled}
              onChange={handleValueChange}
              value={userEmail}
              autoComplete="off"
            />
            <InfoBtn
              name="email"
              type="submit"
              // disabled={handleButtonDisable(isButtonDisabled)}
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
              type="date"
              name="userBirthday"
              disabled={isBirthdayDisabled}
              onChange={handleValueChange}
              value={userBirthday}
              autoComplete="off"
              pattern="\d{1,2}/\d{1,2}/\d{4}"
            />
            <InfoBtn
              type="submit"
              name="birthday"
              // disabled={handleButtonDisable(isButtonDisabled)}
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
              placeholder="+380*********"
              disabled={isPhoneDisabled}
              onChange={handleValueChange}
              value={userPhone}
              autoComplete="off"
            />
            <InfoBtn
              type="submit"
              name="phone"
              // disabled={handleButtonDisable(isButtonDisabled)}
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
              placeholder="City, region"
              disabled={isCityDisabled}
              onChange={handleValueChange}
              value={userCity}
              autoComplete="off"
            />
            <InfoBtn
              type="sumbit"
              name="city"
              // disabled={handleButtonDisable(isButtonDisabled)}
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
