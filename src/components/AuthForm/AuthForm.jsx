import { useState } from 'react';
import {
  Button,
  DivPass,
  FormField,
  IconLink,
  IconStyle,
  IconWrapper,
  Input,
  InputField,
  LinkField,
  StyledLink,
  Error,
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
import cities from './cities.json';
import { API_BASE_URL } from '../../redux/constants';

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
        }
      });

      if (!isValid) return;
      setStep(2);
    });
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
                    <Input id="email" type="email" name="email" placeholder="Email" required />
                    <Error name="email" component="div" />
                  </InputField>
                  <InputField margin={!isRegister}>
                    <Input
                      type={isPasswordShown ? 'text' : 'password'}
                      name="password"
                      placeholder="Password"
                      required
                    />
                    <DivPass onClick={handleIsPasswordShownToggle}>
                      {isPasswordShown ? <ImEye /> : <ImEyeBlocked />}
                    </DivPass>
                    <Error name="password" component="div" />
                  </InputField>
                  {isRegister && (
                    <>
                      <InputField margin>
                        <Input
                          type={isPasswordShown ? 'text' : 'password'}
                          name="passwordConfirm"
                          placeholder="Confirm password"
                          required
                        />
                        <DivPass onClick={handleIsPasswordShownToggle}>
                          {isPasswordShown ? <ImEye /> : <ImEyeBlocked />}
                        </DivPass>
                        <Error name="passwordConfirm" component="div" />
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
                  {!isRegister && <Button type="submit">Login</Button>}
                </>
              )}
              {step === 2 && (
                <>
                  <InputField>
                    <Input id="name" type="text" name="name" placeholder="Name" required />
                    <Error name="name" component="div" />
                  </InputField>
                  <InputField>
                    <Input
                      type="text"
                      list="city"
                      name="city"
                      placeholder="City, Region"
                      required
                    />
                    <datalist id="city">
                      {cities.map(city => (
                        <option key={`${city.city}.${city.lat}`}>
                          {city.city}, {city.admin_name}
                        </option>
                      ))}
                    </datalist>
                    <Error name="city" component="div" />
                  </InputField>
                  <InputField margin>
                    <Input
                      id="phone"
                      type="text"
                      name="phone"
                      placeholder="Phone number"
                      required
                    />
                    <Error name="phone" component="div" />
                  </InputField>
                  <Button type="submit">Registration</Button>
                  <Button outline margin type="button" onClick={() => setStep(1)}>
                    Back
                  </Button>
                </>
              )}
              {isRegister && (
                <LinkField margin>
                  Already have an account? <StyledLink to="/login">Login</StyledLink>
                </LinkField>
              )}
              {!isRegister && (
                <LinkField margin>
                  Don &apos; t have an account? <StyledLink to="/register"> Register </StyledLink>
                </LinkField>
              )}
              <IconWrapper>
                <LinkField> Sign with </LinkField>
                <IconLink href={`${API_BASE_URL}/auth/google`}>
                  <IconStyle src={googleImg} alt="google-sign-in" />
                </IconLink>
              </IconWrapper>
            </>
          </FormField>
        )}
      </Formik>
    </>
  );
};

export default AuthForm;
