import PropTypes from 'prop-types';

export const NoticeCategoryItem = ({ category, title, birthday, breed, location, image }) => {
  return (
    <li>
      <div style={{ position: 'relative' }}>
        <span style={{ position: 'absolute', top: 0, left: 0 }}>{category}</span>
        <div style={{ width: 280, height: 288, marginBottom: 20 }}>
          <img
            src={image}
            alt={title}
            style={{ width: '100%', display: 'block', objectFit: 'cover' }}
          />
        </div>
      </div>
      <div>
        <h3>{title}</h3>
        <div>
          <div>
            <span>Breed:</span>
            <span>{breed}</span>
          </div>
          <div>
            <span>Place:</span>
            <span>{location}</span>
          </div>
          <div>
            <span>Age:</span>
            <span>{birthday}</span>
          </div>
        </div>
        <button type="button">Learn more</button>
        <button type="button">Delete</button>
      </div>
    </li>
  );
};

NoticeCategoryItem.propTypes = {
  _id: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  name: PropTypes.string,
  birthday: PropTypes.string,
  breed: PropTypes.string,
  gender: PropTypes.string,
  location: PropTypes.string,
  price: PropTypes.string,
  image: PropTypes.string,
  comments: PropTypes.string,
};
