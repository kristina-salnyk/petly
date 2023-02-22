import { useEffect, useState } from 'react';
import { useTheme } from 'styled-components';
import { AddPetCrossIcon } from '../icons/AddPetCrossIcon';
import { Button, IconWrap, Label } from './AddNoticeButton.styled';

export const AddNoticeButton = () => {
  const [iconSize, setIconSize] = useState(0);

  const theme = useTheme();

  useEffect(() => {
    const media = window.matchMedia(`(min-width: ${theme.breakpoints.tablet[0]})`);

    const onWindowResize = () => setIconSize(media.matches ? 32 : 24);
    onWindowResize();

    window.addEventListener('resize', onWindowResize);
    return () => window.removeEventListener('resize', onWindowResize);
  }, [iconSize, screen]);

  return (
    <Button onClick={() => {}}>
      <IconWrap>
        <AddPetCrossIcon size={iconSize} />
        <Label>Add pet</Label>
      </IconWrap>
    </Button>
  );
};
