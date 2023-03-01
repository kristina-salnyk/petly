import * as Yup from 'yup';

export const noticesSchema = Yup.object({
  title: Yup.string()
    .min(2)
    .max(48)
    .matches(/^[а-яёіїєА-ЯЁІЇЄA-Za-z-\s]+$/, 'Title field can contain only letters'),
  name: Yup.string()
    .min(2)
    .max(16)
    .matches(/^[а-яёіїєА-ЯЁІЇЄA-Za-z-\s]+$/, 'Name field can contain only letters'),
  birthday: Yup.date('enter corect date').max(new Date(), 'Please, select the correct date'),
  breed: Yup.string()
    .min(2)
    .max(16)
    .matches(/^[а-яёіїєА-ЯЁІЇЄA-Za-z-\s]+$/, 'Breed field can contain only letters'),
  location: Yup.string().min(2).max(16),
  comments: Yup.string()
    .min(8)
    .max(120)
    .matches(/^[aA-zZ\s]+$/)
});
