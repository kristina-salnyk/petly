import { Container, Main, Title, BackgroundContainer } from './LoginPage.styled';
import AuthForm from '../../components/AuthForm/AuthForm';
// import { selectIsLoggedIn } from '../../redux/auth/selectors';
// import { Navigate } from 'react-router-dom';
// import { useSelector } from 'react-redux';

const LoginPage = () => {
  // const isLogin = useSelector(selectIsLoggedIn);
  // if (isLogin) {
  //   return <Navigate to="/user" />;
  // }
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
