import PropTypes from 'prop-types';
import { format } from 'date-fns';
import {
  CardNews,
  DescriptionItemNews,
  TitleItemNews,
  DateItemNews,
  ItemNewsLink,
  FooterItemNews,
  TopLineCard

} from './NewsItem.styled';

const NewsItem = ({title, description, date, url}) => {
  
  return (
    <CardNews >
      <TopLineCard></TopLineCard>
      
      <TitleItemNews>{title}</TitleItemNews>
      

      <DescriptionItemNews>{description}</DescriptionItemNews>
      <FooterItemNews>
        <DateItemNews>{format(new Date(date), 'yyyy/MM/dd')}</DateItemNews>
        <ItemNewsLink href={url} target="_blank">
          Read more
        </ItemNewsLink>
      </FooterItemNews>
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