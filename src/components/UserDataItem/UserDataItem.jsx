import PropTypes from 'prop-types';
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

export const UserDataItem = ({ user }) => {
  return (
    <InfoList>
      <InfoItem>
        <InfoLabel>
          Name:
          <FlexWrapper>
            <InfoInput name="name" type="text" value={user.name} />
            <InfoBtn type="button">
              <EditProfileInfoPenIcon color={theme.colors.accent} />
            </InfoBtn>
          </FlexWrapper>
        </InfoLabel>
      </InfoItem>
      <InfoItem>
        <InfoLabel>
          Email:
          <FlexWrapper>
            <InfoInput type="text" value={user.email} />
            <InfoBtn type="button">
              <EditProfileInfoPenIcon color={theme.colors.accent} />
            </InfoBtn>
          </FlexWrapper>
        </InfoLabel>
      </InfoItem>
      <InfoItem>
        <InfoLabel>
          Birthday:
          <FlexWrapper>
            <InfoInput type="text" name="birthday" value={user.birthday} />
            <InfoBtn type="button">
              <EditProfileInfoPenIcon color={theme.colors.accent} />
            </InfoBtn>
          </FlexWrapper>
        </InfoLabel>
      </InfoItem>
      <InfoItem>
        <InfoLabel>
          Phone:
          <FlexWrapper>
            <InfoInput type="text" value={user.phone} />
            <InfoBtn type="button">
              <EditProfileInfoPenIcon color={theme.colors.accent} />
            </InfoBtn>
          </FlexWrapper>
        </InfoLabel>
      </InfoItem>
      <InfoItem>
        <InfoLabel>
          City:
          <FlexWrapper>
            <InfoInput type="text" value={user.city} />
            <InfoBtn type="button">
              <EditProfileInfoPenIcon color={theme.colors.accent} />
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
