import { AddPetCrossIcon } from '../icons/AddPetCrossIcon';
import { Button, IconWrap, Label } from './AddNoticeButton.styled';
import { useIconSize } from '../../hooks/useIconSize';

export const AddNoticeButton = () => {
  const [iconSize] = useIconSize();

  return (
    <Button onClick={() => {}}>
      <IconWrap>
        <AddPetCrossIcon size={iconSize === 's' ? 24 : 32} />
        <Label>Add pet</Label>
      </IconWrap>
    </Button>
  );
};
