import PropTypes from 'prop-types';
import {
  CardNews,
  DescriptionCardNews,
  TitleCardNews,
  DateCardNews,
  UrlCardNews,
  CardButtonNews,
  TopLineCard

} from './NewsItem.styled';

const NewsItem = ({title, description, date, url}) => {
    
    return (
    <CardNews >
      <TopLineCard></TopLineCard>
      
        <TitleCardNews>{title}</TitleCardNews>
      

      <DescriptionCardNews>{description}</DescriptionCardNews>
      <CardButtonNews>
        <DateCardNews>{date}</DateCardNews>
        <UrlCardNews href={url} target="_blank">
          Read more
        </UrlCardNews>
      </CardButtonNews>
    </CardNews>
  );
};

export default NewsItem;

NewsItem.PropTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    date: PropTypes.string,
    url: PropTypes.string,
};