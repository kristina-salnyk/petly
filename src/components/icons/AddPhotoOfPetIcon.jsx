import * as React from 'react';
import PropTypes from 'prop-types';
import theme from '../../utils/theme';

export const AddPhotoOfPetIcon = ({width=52, heigth=50, color=theme.colors.black, ...props}) => (
  <svg
    width={width}
    height={heigth}
    fill="none"
    {...props}
  >
    <path
      d="M26 49V25m0 0V1m0 24h24.375M26 25H1.625"
      stroke={color}
      strokeOpacity={0.6}
      strokeWidth={2}
      strokeLinecap="round"
    />
  </svg>
)

AddPhotoOfPetIcon.propTypes = {
  color: PropTypes.string,
  width: PropTypes.number,
  heigth: PropTypes.number
};
  