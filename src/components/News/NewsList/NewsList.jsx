import NewsItem from '../NewsItem/NewsItem';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectNews,  selectIsLoading, selectNewsSearchString} from '../../../redux/news/selectors';
import { fetchNews } from '../../../redux/news/operations';
import {filterNews} from '../../../redux/news/filterSlice'
import { ReactComponent as SearchBtn } from './../../../icons/SearchBtn.svg';
import { ReactComponent as CancelBtn } from './../../../icons/CancelBtn.svg';

import {
  ListNews,
  ItemNews,
  ConteinerNews,
  SearchNewsForm,
  SearchNewsInput,
  SearchNewsButton,
  Title,
} from './NewsList.styled'

const handleNewsSearch = (news, filter) => {
  if (filter) {
    return news.filter(newsItem =>
      newsItem.title.toLowerCase().includes(filter.toLowerCase())
    );
  }
  return news;
}

const NewsList = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const news = useSelector(selectNews);

  const searchQuery = useSelector(selectNewsSearchString);
  const searchNews = handleNewsSearch(news, searchQuery.filter);

  
  useEffect(() => {
    dispatch(fetchNews());
  }, [dispatch]);

  const handleClearSearch = e => {
    document.getElementById('searchForm').reset();
    dispatch(filterNews(e.target.value === ''));
    dispatch(fetchNews());
  }
  // const handleSearchForm = e => {
  //   e.preventDefault();
  //   const value = e.target.value;
  //   if (value === '') {
  //     return;
  //   }
  //   if (value !== '') {
  //     searchNews.find(item => item.title === value)
  //   }
  // }

  return (
    <ConteinerNews>
      <Title>News</Title>
      <SearchNewsForm
        id="searchForm"
      >
        <SearchNewsInput
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search"
          onChange={e => dispatch(filterNews(e.target.value))}
        />
        {searchQuery.filter === '' ? (
          <SearchNewsButton type="submit" >
            <SearchBtn/>
          </SearchNewsButton>
        ) : (
          <SearchNewsButton type="submit" onClick={handleClearSearch}>
            <CancelBtn/>
          </SearchNewsButton>)
        }
                
      </SearchNewsForm>
      <ListNews>
        {isLoading &&
                    searchNews.map(({ _id, title, description, date, url }) => (
                      <ItemNews key={_id}>
                        <NewsItem
                          title={title}
                          description={description}
                          date={date}
                          url={url}
                        />
                      </ItemNews>
                    ))
        }
      </ListNews>

    </ConteinerNews>
  );

}

export default NewsList;