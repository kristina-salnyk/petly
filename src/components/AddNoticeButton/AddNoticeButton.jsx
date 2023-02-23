import { AddPetCrossIcon } from '../icons/AddPetCrossIcon';
import { Button, IconWrap, Label } from './AddNoticeButton.styled';
import { useIconSize } from '../../hooks/useIconSize';
import PropTypes from "prop-types";

export const AddNoticeButton = ({onClick}) => {

  const [iconSize] = useIconSize();

  return (
    <Button onClick={onClick}>
      <IconWrap>
        <AddPetCrossIcon size={iconSize === 's' ? 24 : 32} />
        <Label>Add pet</Label>
      </IconWrap>
    </Button>
  );
};


AddNoticeButton.propTypes = {
onClick: PropTypes.func.isRequired
}