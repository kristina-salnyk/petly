import { Container, Main, Title, BackgroundContainer } from './LoginPage.styled';
import AuthForm from '../../components/AuthForm/AuthForm';

const LoginPage = () => {
  return (
    <Main>
      <Container>
        <BackgroundContainer>
          <Title>Login</Title>
          <AuthForm />
        </BackgroundContainer>
      </Container>
    </Main>
  );
};

export default LoginPage;
