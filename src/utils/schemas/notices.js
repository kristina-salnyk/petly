import * as Yup from 'yup';

export const noticesSchema = Yup.object({
  category: Yup.string().required('Please change category'),
  title: Yup.string()
    .required()
    .min(2)
    .max(16)
    .matches(/^[а-яёіїєА-ЯЁІЇЄA-Za-z-\s]+$/, 'Title field can contain only letters'),
  name: Yup.string()
    .required()
    .min(2)
    .max(16)
    .matches(/^[а-яёіїєА-ЯЁІЇЄA-Za-z-\s]+$/, 'Name field can contain only letters'),
  birthday: Yup.date('enter corect date').default(() => new Date()),
  breed: Yup.string()
    .min(2)
    .max(16)
    .matches(/^[а-яёіїєА-ЯЁІЇЄA-Za-z-\s]+$/, 'Breed field can contain only letters'),
  location: Yup.string().min(2).max(16).required(),
  comments: Yup.string().min(8).max(120),
});
