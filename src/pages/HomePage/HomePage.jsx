import { useTheme } from 'styled-components';

const HomePage = () => {
  const theme = useTheme();

  return (
    <div
      style={{
        color: theme.colors.accent,
        fontSize: theme.typography.size.xxl,
        fontWeight: theme.typography.weight.bold,
        fontFamily: theme.typography.font.primary,
      }}
    >
      HomePage
    </div>
  );
};

export default HomePage;
