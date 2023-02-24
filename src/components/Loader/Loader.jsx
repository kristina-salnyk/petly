import { LoaderStyled } from './Loader.styled';
import { RotatingLines } from 'react-loader-spinner';
import { useTheme } from 'styled-components';

const Loader = () => {
  const theme = useTheme();

  return (
    <LoaderStyled>
      <RotatingLines
        strokeColor={theme.colors.brightAccent}
        strokeWidth="5"
        animationDuration="0.75"
        width="120"
        visible={true}
      />
    </LoaderStyled>
  );
};
export default Loader;
