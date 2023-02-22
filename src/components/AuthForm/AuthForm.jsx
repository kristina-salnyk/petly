import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { logIn, register } from '../../redux/auth/operations';
import { useLocation } from 'react-router-dom';
import * as Yup from 'yup';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import {
  Input,
  BtnLogin,
  BtnRegistr,
  BtnBack,
  Form,
  LinkInput,
  StyledLink,
  IconWrapper,
  GoogleIconStyle,
} from './AuthForm.styled';
import { Formik, ErrorMessage } from 'formik';
import Loader from '../Loader/Loader';

const schemasForLogin = Yup.object().shape({
  email: Yup.string().email().required().min(10).max(63),
  password: Yup.string().required().min(7).max(32),
});

const schemasForFirstStep = Yup.object().shape({
  email: Yup.string()
    .email()
    .required()
    .min(10, 'the minimum number of characters in the field is 10')
    .max(63, 'the maximum number of characters in the field is 63 inclusive'),
  password: Yup.string().required().min(7).max(32),
  passwordConfirm: Yup.string().required(),
});

const schemasForSecondStep = Yup.object().shape({
  name: Yup.string().required('Name is required!'),
  region: Yup.string()
    .matches(/^[aA-zZ]+,/, 'Is not correct format, must "City, Region"')
    .required('Region is required'),
  number: Yup.string()
    .matches(
      /^3?[\s]?8?[\s]?\(?0\d{2}?\)?[\s]?\d{3}[\s|-]?\d{2}[\s|-]?\d{2}$/,
      'Field must contain only numbers and format 380xxxxxxxxx!'
    )
    .required('Phone number is required!')
    .min(12, 'Cannot be less than twelve characters!')
    .max(12, 'Cannot be more than twelve characters!'),
});

const validateEmail = value => {
  let err;
  if (!value) {
    err = 'E-mail address required';
  } else if (
    !/^((([0-9A-Za-z]{1}[-0-9A-z]{1,}[0-9A-Za-z]{1}))@([-0-9A-Za-z]{1,}\.){1,2}[-A-Za-z]{2,})$/i.test(
      value
    )
  ) {
    err =
      'The e-mail address is not correct, there must be at least 2 characters before the "@" symbol, the hyphen cannot be at the beginning, and the e-mail cannot contain Latin letters, email can include Latin letters, numbers and symbols!';
  }
  return err;
};

const validatePass = value => {
  let err;
  if (!value) {
    err = 'Password is required';
  } else if (value.includes(' ')) {
    err = 'Invalid password, must not include spaces';
  }
  return err;
};

// const [show, setShow] = useState(false);
// const handleShow = () => {
//   setShow(!show);
// };

const AuthForm = () => {
  const [stepOne, setStepOne] = useState(true);
  const location = useLocation();
  const page = location.pathname;

  const dispatch = useDispatch();

  let user = useSelector(state => state.auth.user);

  const loading = useSelector(state => state.auth.loading);

  const onLogin = data => {
    dispatch(logIn(data));
  };
  const initialValue = {
    email: '',
    password: '',
    passwordConfirm: '',
    name: '',
    region: '',
    number: '',
  };

  const handleSubmitForLogin = (values, actions) => {
    user = {
      email: values.email,
      password: values.password,
    };
    actions.resetForm();
    return onLogin(user);
 
  };

  const handleSubmitForRegister = (values, actions) => {
    if (stepOne) {
      if (values.password !== values.passwordConfirm) {
        return Notify.failure('Your passwords must have the same value');
      }
      return setStepOne(false);
    }
    if (!stepOne) {
      user = {
        email: values.email,
        password: values.password,
        name: values.name,
        city: values.region,
        phone: values.number,
      };
      actions.resetForm();
      setStepOne(true);
      return dispatch(register(user));
    }
  };

  const backBtnClick = () => {
    if (!stepOne) {
      return setStepOne(true);
    }
  };

  return (
    <>
      {loading && <Loader />}
      {page === '/register' && (
        <>
          {stepOne ? (
            <Formik
              validationSchema={schemasForFirstStep}
              initialValues={initialValue}
              onSubmit={handleSubmitForRegister}
            >
              <Form autoComplete="off">
                <Input
                  type="email"
                  name="email"
                  placeholder="Email"
                  validate={validateEmail}
                  required
                />
                <ErrorMessage
                  name="email"
                  render={msg => Notify.warning(`${msg}`, { timeout: 2000 })}
                />
                <Input
                  type="password"
                  name="password"
                  placeholder="Password"
                  validate={validatePass}
                  required
                />
                <ErrorMessage
                  name="password"
                  render={msg => Notify.warning(`${msg}`, { timeout: 2000 })}
                />
                <Input
                  type="password"
                  name="passwordConfirm"
                  placeholder="Confirm Password"
                  validate={validatePass}
                  required
                />
                <ErrorMessage
                  name="passwordConfirm"
                  render={msg => Notify.warning(`${msg}`, { timeout: 2000 })}
                />
                <BtnRegistr type="button" onClick={handleSubmitForRegister}>
                  Next
                </BtnRegistr>
                {/* <Google/> */}
              </Form>
            </Formik>
          ) : (
            <Formik
              validationSchema={schemasForSecondStep}
              initialValues={initialValue}
              onSubmit={handleSubmitForRegister}
              autoComplete="off"
            >
              <Form>
                <Input type="text" name="name" placeholder="Name" required />
                <ErrorMessage
                  name="name"
                  render={msg => Notify.warning(`${msg}`, { timeout: 2000 })}
                />
                <Input ttype="text" name="region" placeholder="City, region" required />
                <ErrorMessage
                  name="region"
                  render={msg => Notify.warning(`${msg}`, { timeout: 2000 })}
                />
                <Input type="tel" name="number" placeholder="Mobile phone" required />
                <ErrorMessage
                  name="number"
                  render={msg => Notify.warning(`${msg}`, { timeout: 2000 })}
                />

                <BtnRegistr type="submit">Register</BtnRegistr>
                <BtnBack type="button" onClick={backBtnClick}>
                  Back
                </BtnBack>
                {/* <Google/> */}
              </Form>
            </Formik>
          )}
          <LinkInput>
            Already have an account? <StyledLink to="/login">Login</StyledLink>
          </LinkInput>
        </>
      )}
      {page === '/login' && (
        <>
          <Formik
            validationSchema={schemasForLogin}
            initialValues={initialValue}
            onSubmit={handleSubmitForLogin}
          >
            <Form autoComplete="off">
              <Input type="email" name="email" placeholder="Email" />
              <ErrorMessage name="email" render={msg => Notify.warning(`${msg}`)} />
              <Input
                type="password"
                name="password"
                placeholder="Password"
                validate={validatePass}
              />
              <ErrorMessage
                name="password"
                render={msg => Notify.warning(`${msg}`, { timeout: 2000 })}
              />

              <BtnLogin type="submit">Login</BtnLogin>
              <IconWrapper>
                <GoogleIconStyle
                  src="../../images/AuthPages/googleIcon.png"
                  alt="sing in with Google"
                />
              </IconWrapper>
            </Form>
          </Formik>
          <LinkInput>
            Dont have an account?
            <StyledLink to="/register"> Register </StyledLink>
          </LinkInput>
        </>
      )}
    </>
  );
};

export default AuthForm;
