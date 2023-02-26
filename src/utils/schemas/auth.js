import * as Yup from 'yup';

export const loginSchema = Yup.object({
  email: Yup.string()
    .required('Email field is required')
    .matches(
      /^((([0-9A-Za-z]{1}[-0-9A-z.]{1,}[0-9A-Za-z]{1})|([0-9А-Яа-я]{1}[-0-9А-я.]{1,}[0-9А-Яа-я]{1}))@([-A-Za-z]{1,}.){1,2}[-A-Za-z]{2,})$/u,
      'Invalid email format'
    ),

  password: Yup.string()
    .required('Password field is required')
    .min(7, 'Password is too short. The minimum number of symbols is 7')
    .max(32, 'Password is too long. The maximum number of symbols is 32'),
});

export const registerSchema = Yup.object({
  email: Yup.string()
    .required('Email field is required')
    .matches(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/u, 'Invalid email format'),
  password: Yup.string()
    .required('Password is required')
    .min(7, 'Password is too short. The minimum number of symbols is 7')
    .max(32, 'Password is too long. The maximum number of symbols is 32'),
  passwordConfirm: Yup.string()
    .required('Password confirmation is required')
    .oneOf([Yup.ref('password'), ''], 'Password confirmation must match'),
  name: Yup.string()
    .required('Name field is required')
    .min(2, 'Name is too short')
    .matches(/^[а-яёіїєА-ЯЁІЇЄA-Za-z-\s]+$/, 'Name field can contain only letters'),
  city: Yup.string()
    .required('City/region field is required')
    .min(2, 'City/region is too short')
    .matches(
      /^[а-яёіїєА-ЯЁІЇЄA-Za-z-]+,?\s[а-яёіїєА-ЯЁІЇЄA-Za-z-]+$/,
      'City/region must be in the format "City, region"'
    ),
  phone: Yup.string()
    .required('Phone field is required')
    .matches(/^\+380\d{9}$/, 'Phone must be in the format +380XXXXXXXXX'),
});
