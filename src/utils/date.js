import { format } from 'date-fns';

export const dateFormatting = string => {
  const date = string.slice(0, 10).split('-');
  return format(new Date(date), 'dd.mm.yyyy');
};
