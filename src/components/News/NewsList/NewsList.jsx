import NewsItem from '../NewsItem/NewsItem';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectNews,  selectIsLoading, selectNewsSearchString} from '../../../redux/news/selectors';
import { fetchNews } from '../../../redux/news/operations';
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
    return news.filter(news =>
      news.title.toLowerCase().includes(filter.toLowerCase())
    );
  }
return news;
}

const NewsList = () => {
    const dispatch = useDispatch();
    const isLoading = useSelector(selectIsLoading);
    const news = useSelector(selectNews);

    console.log('FetchNews',news);
    const searchQuery = useSelector(selectNewsSearchString);
    const searchNews = handleNewsSearch(news, searchQuery.searchQuery);

    // const handleClearInput = evt => {
    //     evt.preventDefault();
    //     searchQuery = '';
    // };
    


    useEffect(() => {
        dispatch(fetchNews());
    }, [dispatch]);

    return (
        <ConteinerNews>
            <Title>News</Title>
            <SearchNewsForm>
                <SearchNewsInput
                    type="text"
                    autoComplete="off"
                    autoFocus
                    value={searchQuery}
                    placeholder="Search"
                    onChange={searchNews}
                />
                {searchQuery === '' ? (
                    <SearchNewsButton type="submit" onClick={searchNews}>
                        <SearchBtn/>
                </SearchNewsButton>
                ) : (
                    <SearchNewsButton type="submit" onClick={searchNews}>
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