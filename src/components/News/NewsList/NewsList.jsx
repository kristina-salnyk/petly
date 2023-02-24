import NewsItem from '../NewsItem/NewsItem';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useIconSize } from '../../../hooks/useIconSize';
import { selectNews,  selectIsLoading, selectNewsSearchString} from '../../../redux/news/selectors';
import { fetchNews } from '../../../redux/news/operations';
import {filterNews} from '../../../redux/news/filterSlice'
// import { ReactComponent as SearchBtn } from './../../../icons/SearchBtn.svg';
// import { ReactComponent as CancelBtn } from './../../../icons/CancelBtn.svg';

import { SearchIcon } from '../../../components/icons/SearchIcon';
import { CloseSearchCross } from '../../../components/icons/CloseSearchCross';

import {
  ListNews,
  ItemNews,
  ConteinerNews,
  SearchNewsForm,
  SearchNewsInput,
  SearchNewsButton,
  InputWrap,
  Title,
} from './NewsList.styled'

const handleNewsSearch = (news, filter) => {
  if (filter) {
    return news.filter(newsItem =>
      newsItem.title.toLowerCase().includes(filter.toString().toLowerCase())
    );
  }
  return news;
}

const NewsList = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const news = useSelector(selectNews);
  const sortedNewsByDate = [...news].sort(function (a, b) {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);
    return dateB - dateA;
  })
  const [iconSize] = useIconSize();
  const searchQuery = useSelector(selectNewsSearchString);
  const searchNews = handleNewsSearch(sortedNewsByDate, searchQuery.filter);

  useEffect(() => {
    dispatch(fetchNews());
  }, [dispatch]);

  const handleClearSearch = () => {
    document.getElementById('searchForm').reset();
    dispatch(filterNews(''));
  }

  return (
    <ConteinerNews>
      <Title>News</Title>
      <SearchNewsForm
        id="searchForm"
      >
        <InputWrap>
          <SearchNewsInput
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search"
            onChange={e => dispatch(filterNews(e.target.value))}
          />
          {searchQuery.filter === '' ? (
            <SearchNewsButton type="submit" >
              <SearchIcon size={iconSize === 's' ? 20 : 24} />
            </SearchNewsButton>
          ) : (
            <SearchNewsButton type="submit" onClick={handleClearSearch}>
              <CloseSearchCross
                size={iconSize === 's' ? 20 : 24}/>
            </SearchNewsButton>)
          }
        </InputWrap>
        
                
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