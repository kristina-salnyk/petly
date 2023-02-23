import { useEffect, useState } from 'react';
import { useTheme } from 'styled-components';

export const useIconSize = () => {
  const [iconSize, setIconSize] = useState(0);

  const theme = useTheme();

  useEffect(() => {
    const media = window.matchMedia(`(min-width: ${theme.breakpoints.tablet[0]})`);

    const onWindowResize = () => setIconSize(media.matches ? 'l' : 's');
    onWindowResize();

    window.addEventListener('resize', onWindowResize);
    return () => window.removeEventListener('resize', onWindowResize);
  }, [iconSize, screen]);

  return [iconSize];
};
