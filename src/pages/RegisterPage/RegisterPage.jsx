import { Container, Main, Title, BackgroundContainer } from './RegisterPage.styled';
import AuthForm from '../../components/AuthForm/AuthForm';

const RegisterPage = () => {
  return (
    <Main>
      <Container>
        <BackgroundContainer>
          <Title>Registration</Title>
          <AuthForm />
        </BackgroundContainer>
      </Container>
    </Main>
  );
};

export default RegisterPage;
