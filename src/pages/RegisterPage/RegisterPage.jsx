import { BackgroundContainer, Container, Main, Title } from './RegisterPage.styled';
import AuthForm from '../../components/AuthForm/AuthForm';
import { useSelector } from 'react-redux';
import { selectIsRegistered } from '../../redux/auth/selectors';
import emailImg from '../../images/email-img.png';
import { InformationBlock } from '../../components/InformationBlock/InformationBlock';

const RegisterPage = () => {
  const isRegistered = useSelector(selectIsRegistered);

  return (
    <Main>
      <Container>
        <BackgroundContainer>
          <>
            {isRegistered ? (
              <InformationBlock
                title="Email verification"
                text="To complete the registration confirm your email using the link in the mailbox"
                img={emailImg}
              />
            ) : (
              <>
                <Title>Registration</Title>
                <AuthForm />
              </>
            )}
          </>
        </BackgroundContainer>
      </Container>
    </Main>
  );
};

export default RegisterPage;
