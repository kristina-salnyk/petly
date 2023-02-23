import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { logIn, register } from '../../redux/auth/operations';
import { useLocation } from 'react-router-dom';
import * as Yup from 'yup';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import {
  Input,
  Button,
  FormField,
  InputField,
  DivPass,
  StyledLink,
  LinkField,
} from './AuthForm.styled';
import { Formik, ErrorMessage } from 'formik';
import Loader from '../Loader/Loader';
import { ImEyeBlocked } from 'react-icons/im';
import { ImEye } from 'react-icons/im';

const schemasForLogin = Yup.object({
  email: Yup.string()
    .matches(
      /^((([0-9A-Za-z]{1}[-0-9A-z.]{1,}[0-9A-Za-z]{1})|([0-9А-Яа-я]{1}[-0-9А-я.]{1,}[0-9А-Яа-я]{1}))@([-A-Za-z]{1,}.){1,2}[-A-Za-z]{2,})$/u,
      'Invalid email format'
    )
    .required('Email is required'),
  password: Yup.string()
    .required('Password is require!')
    .min(7, 'Password too short!')
    .max(32, 'Password too long!'),
});

const schemasForFirstStep = Yup.object({
  email: Yup.string()
    .matches(
      /^((([0-9A-Za-z]{1}[-0-9A-z.]{1,}[0-9A-Za-z]{1})|([0-9А-Яа-я]{1}[-0-9А-я.]{1,}[0-9А-Яа-я]{1}))@([-A-Za-z]{1,}.){1,2}[-A-Za-z]{2,})$/u,
      'Invalid email format'
    )
    .required('Email is required'),
  password: Yup.string()
    .required('Password is require!')
    .min(7, 'Password too short!')
    .max(32, 'Password too long!'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), ''], 'Password must match!')
    .required('Require'),
});

const schemasForSecondStep = Yup.object({
  name: Yup.string()
    .min(2, 'Name too short!')
    .matches(/^[а-яёіїєА-ЯЁІЇЄA-Za-z-\s]+$/, 'Only Letters')
    .required('Name is required!'),
  city: Yup.string()
    .min(2)
    .required('City is required!')
    .matches(
      /^[а-яёіїєА-ЯЁІЇЄA-Za-z]+,?\s[а-яёіїєА-ЯЁІЇЄA-Za-z]+$/,
      'Enter data in the format "City, region"'
    ),
  phone: Yup.string()
    .required('Phone is required')
    .matches(/^\+380\d{9}$/, 'Enter phone number in the format +380XXXXXXXXX'),
});
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
      if (!values) {
        return Notify.failure('Please fulfilled all fields');
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
  const [show, setShow] = useState(false);
  const handleShow = () => {
    setShow(!show);
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
              <FormField autoComplete="off">
                <InputField>
                  <Input id="email" type="email" name="email" placeholder="Email" />
                  <ErrorMessage
                    name="email"
                    render={msg =>
                      Notify.warning(`${msg}`, { timeout: 2000, showOnlyTheLastOne: true })
                    }
                  />
                </InputField>
                <InputField>
                  <Input type={show ? 'text' : 'password'} name="password" placeholder="Password" />
                  <DivPass onClick={handleShow}>{show ? <ImEye /> : <ImEyeBlocked />}</DivPass>
                  <ErrorMessage
                    name="password"
                    render={msg =>
                      Notify.warning(`${msg}`, { timeout: 2000, showOnlyTheLastOne: true })
                    }
                  />
                </InputField>
                <InputField margin>
                  <Input
                    type={show ? 'text' : 'password'}
                    name="passwordConfirm"
                    placeholder="Confirm password"
                  />
                  <DivPass onClick={handleShow}>{show ? <ImEye /> : <ImEyeBlocked />}</DivPass>

                  <ErrorMessage
                    name="password"
                    render={msg =>
                      Notify.warning(`${msg}`, { timeout: 2000, showOnlyTheLastOne: true })
                    }
                  />
                </InputField>
                <Button margin type="submit">
                  Next
                </Button>
                <LinkField>
                  Already have an account? <StyledLink to="/login">Login</StyledLink>
                </LinkField>
              </FormField>
            </Formik>
          ) : (
            <Formik
              validationSchema={schemasForSecondStep}
              initialValues={initialValue}
              onSubmit={handleSubmitForRegister}
              autoComplete="off"
            >
              <FormField>
                <InputField>
                  <Input id="name" type="text" name="name" placeholder="Name" />
                  <ErrorMessage
                    name="name"
                    render={msg =>
                      Notify.warning(`${msg}`, { timeout: 2000, showOnlyTheLastOne: true })
                    }
                  />
                </InputField>
                <InputField>
                  <Input id="city" type="text" name="city" placeholder="City, Region" />
                  <ErrorMessage
                    name="city"
                    render={msg =>
                      Notify.warning(`${msg}`, { timeout: 2000, showOnlyTheLastOne: true })
                    }
                  />
                </InputField>
                <InputField margin>
                  <Input id="phone" type="text" name="phone" placeholder="Phone number" />
                  <ErrorMessage
                    name="phone"
                    render={msg =>
                      Notify.warning(`${msg}`, { timeout: 2000, showOnlyTheLastOne: true })
                    }
                  />
                </InputField>
                <Button type="submit">Registration</Button>
                <Button
                  outline
                  margin
                  submit
                  type="button"
                  onClick={() => {
                    backBtnClick;
                  }}
                >
                  Back
                </Button>
                <LinkField>
                  Already have an account? <StyledLink to="/login">Login</StyledLink>
                </LinkField>
              </FormField>
            </Formik>
          )}
        </>
      )}
      {page === '/login' && (
        <>
          <Formik
            validationSchema={schemasForLogin}
            initialValues={initialValue}
            onSubmit={handleSubmitForLogin}
          >
            <FormField autoComplete="off">
              <InputField>
                <Input id="email" type="email" name="email" placeholder="Email" />
              </InputField>
              <ErrorMessage
                name="email"
                render={msg =>
                  Notify.warning(`${msg}`, { timeout: 2000, showOnlyTheLastOne: true })
                }
              />
              <InputField margin>
                <Input
                  id="password"
                  type={show ? 'text' : 'password'}
                  name="password"
                  placeholder="Password"
                />
                <DivPass onClick={handleShow}>{show ? <ImEye /> : <ImEyeBlocked />}</DivPass>
              </InputField>
              <ErrorMessage
                name="password"
                render={msg =>
                  Notify.warning(`${msg}`, { timeout: 2000, showOnlyTheLastOne: true })
                }
              />
              <Button type="submit">Login</Button>
            </FormField>
          </Formik>
          <LinkField>
            Don &apos; t have an account? <StyledLink to="/register"> Register </StyledLink>
          </LinkField>
        </>
      )}
    </>
  );
};

export default AuthForm;
