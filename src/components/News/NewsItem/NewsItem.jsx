import PropTypes from 'prop-types';
import { format } from 'date-fns';
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
        <DateCardNews>{format(new Date(date), 'yyyy/MM/dd')}</DateCardNews>
        <UrlCardNews href={url} target="_blank">
          Read more
        </UrlCardNews>
      </CardButtonNews>
    </CardNews>
  );
};

export default NewsItem;

NewsItem.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  date: PropTypes.string,
  url: PropTypes.string,
};