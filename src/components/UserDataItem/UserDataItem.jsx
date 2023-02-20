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

export const UserDataItem = () => {
  return (
    <InfoList>
      <InfoItem>
        <InfoLabel>
          Name:
          <FlexWrapper>
            <InfoInput type="text" />
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
            <InfoInput type="text" />
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
            <InfoInput type="text" />
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
            <InfoInput type="text" />
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
            <InfoInput type="text" />
            <InfoBtn type="button">
              <EditProfileInfoPenIcon color={theme.colors.accent} />
            </InfoBtn>
          </FlexWrapper>
        </InfoLabel>
      </li>
    </InfoList>
  );
};
