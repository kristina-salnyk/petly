import PropTypes from 'prop-types';
import NewsItem from '../NewsItem/NewsItem';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectNews, selectIsLoading, selectNewsSearchString } from '../../../redux/news/selectors';
import { fetchNews } from '../../../redux/news/operations';
import Loading from '../../Loading/Loading';
import NotFound from '../../Loading/NotFound';

import { ListNews, ItemNews, ConteinerNews, ErrorTitle } from './NewsList.styled';

import { Pagination } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#F59256',
    },
  },
});

// const handleNewsSearch = (news, filter) => {
//   if (filter) {
//     return news.filter(newsItem =>
//       newsItem.title.toLowerCase().includes(filter.toString().toLowerCase())
//     );
//   }
//   return news;
// };

const NewsList = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const news = useSelector(selectNews);
  // const sortedNewsByDate = [...news].sort(function (a, b) {
  //   const dateA = new Date(a.date);
  //   const dateB = new Date(b.date);
  //   return dateB - dateA;
  // });

  const searchQuery = useSelector(selectNewsSearchString);
  // const searchNews = handleNewsSearch(sortedNewsByDate, searchQuery.filter);
  const [page, setPage] = useState(1);
  const handleChangePagination = (event, page) => {
    setPage(page);
  };
  console.log(searchQuery.filter);
  const count = Math.ceil(20 / 6);

  useEffect(() => {
    dispatch(fetchNews({ page, search: searchQuery.filter }));
  }, [dispatch, page, searchQuery.filter]);

  return (
    <ConteinerNews>
      <ListNews>
        {isLoading ? (
          <Loading />
        ) : (
          news.map(({ _id, title, description, date, url }) => (
            <ItemNews key={_id}>
              <NewsItem title={title} description={description} date={date} url={url} />
            </ItemNews>
          ))
        )}

        {news.length === 0 && !isLoading && (
          <div>
            <ErrorTitle> Nothing found for your search, please try again! </ErrorTitle>
            <NotFound />
          </div>
        )}
      </ListNews>
      {news.length !== 0 && !isLoading && (
        <ThemeProvider theme={theme}>
          <Pagination
            color="primary"
            count={count}
            size="large"
            defaultPage={page}
            page={page}
            variant="outlined"
            onChange={handleChangePagination}
            style={{ display: 'flex', justifyContent: 'center' }}
          />
        </ThemeProvider>
      )}
    </ConteinerNews>
  );
};

export default NewsList;

NewsList.propTypes = {
  search: PropTypes.string,
};
