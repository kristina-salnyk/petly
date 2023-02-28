import * as Yup from 'yup';

const emailReq =
  // eslint-disable-next-line no-useless-escape
  /^((([0-9A-Za-z]{1}[-0-9A-z.]{1,}[0-9A-Za-z]{1})|([0-9А-Яа-я]{1}[-0-9А-я.]{1,}[0-9А-Яа-я]{1}))@([-A-Za-z]{1,}.){1,2}[-A-Za-z]{2,})$/u;
const passwordReq =
  // eslint-disable-next-line no-useless-escape
  /^.*(?=.{7,})((?!.* )(?=.*[!@#$%^&*()\-/_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/;

export const loginSchema = Yup.object({
  email: Yup.string()
    .required('Email field is required')
    .min(10)
    .max(63)
    .matches(emailReq, 'Invalid email format'),

  password: Yup.string()
    .required('Password field is required')
    .min(7, 'Password is too short. The minimum number of symbols is 7')
    .max(32, 'Password is too long. The maximum number of symbols is 32'),
});

export const registerSchema = Yup.object({
  email: Yup.string()
    .required('Email field is required')
    .min(10)
    .max(63)
    .matches(emailReq, 'Invalid email format'),
  password: Yup.string()

    .required('Password is required')
    .min(7, 'Password is too short. The minimum number of symbols is 7')
    .max(32, 'Password is too long. The maximum number of symbols is 32')
    .matches(
      passwordReq,
      'Password must contain at least 7 characters, one uppercase, one number and one special case character'
    ),
  passwordConfirm: Yup.string()
    .required('Password confirmation is required')
    .oneOf([Yup.ref('password'), ''], 'Password confirmation must match'),
  name: Yup.string()
    .required('Name field is required')
    .min(2, 'Name is too short')
    .matches(/^[A-Za-z-\s]+$/, 'Name field can contain only latin letters'),
  city: Yup.string().required('City/region field is required'),
  phone: Yup.string()
    .required('Phone field is required')
    .matches(/^\+380\d{9}$/, 'Phone must be in the format +380XXXXXXXXX'),
});
