import NewsList from '../../components/News/NewsList/NewsList';
import NewsSearchForm from '../../components/News/NewsSearch/NewsSearch';
import { Container, TitleNews } from './NewsPage.styled';
import { useSearchParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectNewsSearchString } from '../../redux/news/selectors';
import { filterNews } from '../../redux/news/filterSlice';

const NewsPage = () => {
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  const queryParam = searchParams.get('query') ?? '';
  const searchQuery = useSelector(selectNewsSearchString);

  useEffect(() => {
    if (!queryParam) {
      return setSearchQueryParam();
    }
    dispatch(filterNews(queryParam));
    return () => {
      dispatch(filterNews(''));
    };
  }, [queryParam]);

  useEffect(() => {
    return () => dispatch(filterNews(''));
  }, []);

  const setSearchQueryParam = () => {
    const query = searchQuery.filter.trim();
    const newParams = query !== '' ? { query } : {};
    setSearchParams(newParams);
  };

  return (
    <Container>
      <TitleNews>News</TitleNews>
      <NewsSearchForm onSubmit={setSearchQueryParam} />
      <NewsList search={queryParam} />
    </Container>
  );
};

export default NewsPage;
