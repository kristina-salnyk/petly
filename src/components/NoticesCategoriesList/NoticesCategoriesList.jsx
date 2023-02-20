import { useParams } from 'react-router-dom';

export const NoticeCategoriesList = () => {
  const { categoryName } = useParams();

  return <h1>{categoryName}</h1>;
};
