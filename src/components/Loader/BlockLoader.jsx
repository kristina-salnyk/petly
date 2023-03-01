import { RotatingLines } from 'react-loader-spinner';
import { useTheme } from 'styled-components';

const BlockLoader = () => {
  const theme = useTheme();

  return (
    <RotatingLines
      strokeColor={theme.colors.brightAccent}
      strokeWidth="5"
      animationDuration="0.75"
      width="120"
      visible={true}
    />
  );
};

export default BlockLoader;
