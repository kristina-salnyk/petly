import {
  InfoList,
  InfoItem,
  InfoLabel,
  FlexWrapper,
  InfoInput,
  InfoBtn,
} from './UserDataItem.styled';
import theme from '../../utils/theme';
import { useAuth } from '../../hooks/useAuth';
import { EditProfileInfoPenIcon } from '../../components/icons/EditProfileInfoPenIcon';

export const UserDataItem = () => {
  const { user } = useAuth();

  return (
    <InfoList>
      <InfoItem>
        <InfoLabel>
          Name:
          <FlexWrapper>
            <InfoInput type="text" value={user.name} />
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
            <InfoInput type="text" value="00.00.0000" disabled />
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
      <li>
        <InfoLabel>
          City:
          <FlexWrapper>
            <InfoInput type="text" value={user.city} />
            <InfoBtn type="button">
              <EditProfileInfoPenIcon color={theme.colors.accent} />
            </InfoBtn>
          </FlexWrapper>
        </InfoLabel>
      </li>
    </InfoList>
  );
};
