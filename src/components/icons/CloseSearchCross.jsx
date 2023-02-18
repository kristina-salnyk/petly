import * as React from 'react';
import PropTypes from 'prop-types';
import theme from '../../utils/theme';

export const CloseSearchCross = ({size=24, color = theme.colors.black, ...props}) => (
  <svg
    width={size}
    height={size}
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="m15 9-6 6M9 9l6 6"
      stroke="#000"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

CloseSearchCross.propTypes = {
  color: PropTypes.string,
  size: PropTypes.number,
};

