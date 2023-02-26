import { useState } from 'react';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import {
  Button,
  DivPass,
  FormField,
  Input,
  InputField,
  LinkField,
  StyledLink,
  IconWrapper,
  IconLink,
  IconStyle,
} from './AuthForm.styled';
import { Formik } from 'formik';
import { ImEye, ImEyeBlocked } from 'react-icons/im';
import { loginSchema, registerSchema } from '../../utils/schemas/auth';
import { useDispatch, useSelector } from 'react-redux';
import { logIn, register } from '../../redux/auth/operations';
import { selectIsLoading } from '../../redux/auth/selectors';
import { useLocation } from 'react-router-dom';
import Loader from '../Loader/Loader';
import googleImg from '../../images/AuthPages/googleIcon.png';

const initialValues = {
  email: '',
  password: '',
  passwordConfirm: '',
  name: '',
  city: '',
  phone: '',
};

const AuthForm = () => {
  const dispatch = useDispatch();

  const location = useLocation();
  const isRegister = location.pathname === '/register';

  const [step, setStep] = useState(1);
  const [isPasswordShown, setIsPasswordShown] = useState(false);

  const isLoading = useSelector(selectIsLoading);

  const handleIsPasswordShownToggle = () => {
    setIsPasswordShown(prevState => !prevState);
  };

  const handleNextButtonClick = validateForm => {
    const validationFields = ['email', 'password', 'passwordConfirm'];

    validateForm().then(result => {
      let isValid = true;

      validationFields.forEach(field => {
        if (result[field]) {
          isValid = false;
          showValidationError(result[field]);
        }
      });

      if (!isValid) return;
      setStep(2);
    });
  };

  const handleSubmitClick = validateForm => {
    validateForm().then(result => {
      const errors = Object.values(result);
      errors.forEach(showValidationError);
    });
  };

  const showValidationError = error => {
    Notify.warning(`${error}`, { timeout: 5000 });
  };

  const handleRegisterSubmit = values => {
    const data = {
      email: values.email,
      password: values.password,
      name: values.name,
      city: values.city,
      phone: values.phone,
    };

    return dispatch(register(data));
  };

  const handleLoginSubmit = values => {
    const data = {
      email: values.email,
      password: values.password,
    };

    return dispatch(logIn(data));
  };

  return (
    <>
      {isLoading && <Loader />}

      <Formik
        validationSchema={isRegister ? registerSchema : loginSchema}
        initialValues={isRegister ? initialValues : { email: '', password: '' }}
        onSubmit={isRegister ? handleRegisterSubmit : handleLoginSubmit}
      >
        {({ validateForm }) => (
          <FormField autoComplete="on">
            <>
              {step === 1 && (
                <>
                  <InputField>
                    <Input id="email" type="email" name="email" placeholder="Email" />
                  </InputField>
                  <InputField margin={!isRegister}>
                    <Input
                      type={isPasswordShown ? 'text' : 'password'}
                      name="password"
                      placeholder="Password"
                    />
                    <DivPass onClick={handleIsPasswordShownToggle}>
                      {isPasswordShown ? <ImEye /> : <ImEyeBlocked />}
                    </DivPass>
                  </InputField>
                  {isRegister && (
                    <>
                      <InputField margin>
                        <Input
                          type={isPasswordShown ? 'text' : 'password'}
                          name="passwordConfirm"
                          placeholder="Confirm password"
                        />
                        <DivPass onClick={handleIsPasswordShownToggle}>
                          {isPasswordShown ? <ImEye /> : <ImEyeBlocked />}
                        </DivPass>
                      </InputField>
                      <Button
                        margin
                        type="button"
                        onClick={() => {
                          handleNextButtonClick(validateForm);
                        }}
                      >
                        Next
                      </Button>
                    </>
                  )}
                  {!isRegister && (
                    <Button type="submit" onClick={() => handleSubmitClick(validateForm)}>
                      Login
                    </Button>
                  )}
                </>
              )}
              {step === 2 && (
                <>
                  <InputField>
                    <Input id="name" type="text" name="name" placeholder="Name" />
                  </InputField>
                  <InputField>
                    <Input id="city" type="text" name="city" placeholder="City, Region" />
                  </InputField>
                  <InputField margin>
                    <Input id="phone" type="text" name="phone" placeholder="Phone number" />
                  </InputField>
                  <Button type="submit" onClick={() => handleSubmitClick(validateForm)}>
                    Registration
                  </Button>
                  <Button outline margin type="button" onClick={() => setStep(1)}>
                    Back
                  </Button>
                </>
              )}
              {isRegister && (
                <>
                  <LinkField margin>
                    Already have an account? <StyledLink to="/login">Login</StyledLink>
                  </LinkField>
                  <IconWrapper>
                    <LinkField> Sign with </LinkField>
                    <IconLink href={'https://google.com.ua'} target="_self">
                      <IconStyle src={googleImg} alt="google-sign-in" />
                    </IconLink>
                  </IconWrapper>
                </>
              )}
              {!isRegister && (
                <>
                  <LinkField margin>
                    Don &apos; t have an account? <StyledLink to="/register"> Register </StyledLink>
                  </LinkField>

                  <IconWrapper>
                    <LinkField> Sign with </LinkField>
                    <IconLink href={'https://google.com.ua'} target="_self">
                      <IconStyle src={googleImg} alt="google-sign-in" />
                    </IconLink>
                  </IconWrapper>
                </>
              )}
            </>
          </FormField>
        )}
      </Formik>
    </>
  );
};

export default AuthForm;
