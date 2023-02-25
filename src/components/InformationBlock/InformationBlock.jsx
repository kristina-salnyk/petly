import PropTypes from 'prop-types';
import { Container, Image, Text, Title } from './InformationBlock.styled';

export const InformationBlock = ({ title, text, img }) => {
  return (
    <Container>
      <Title>{title}</Title>
      {text && <Text>{text}</Text>}
      <Image src={img} alt="Information block image with cat" />
    </Container>
  );
};

InformationBlock.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string,
  img: PropTypes.string.isRequired,
};
