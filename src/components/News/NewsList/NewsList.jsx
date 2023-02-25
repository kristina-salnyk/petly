import NewsItem from '../NewsItem/NewsItem';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectNews,  selectIsLoading, selectNewsSearchString} from '../../../redux/news/selectors';
import { fetchNews } from '../../../redux/news/operations';

import {
  ListNews,
  ItemNews,
  ConteinerNews,
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
  
  const searchQuery = useSelector(selectNewsSearchString);
  const searchNews = handleNewsSearch(sortedNewsByDate, searchQuery.filter);

  useEffect(() => {
    dispatch(fetchNews());
  }, [dispatch]);

  return (
    <ConteinerNews>
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