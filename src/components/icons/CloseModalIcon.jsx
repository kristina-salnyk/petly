import * as React from 'react';
import PropTypes from 'prop-types';
import theme from '../../utils/theme';

export const CloseModalIcon = ({ size = 36, color = theme.colors.primary, ...props }) => (
  <svg width={size} height={size} fill="none" viewBox="0 0 36 36" {...props}>
    <g clipPath="url(#a)">
      <path
        d="m19.41 18 8.29-8.29a1 1 0 0 0-1.41-1.41L18 16.59l-8.29-8.3a1.004 1.004 0 1 0-1.42 1.42l8.3 8.29-8.3 8.29A1 1 0 1 0 9.7 27.7l8.3-8.29 8.29 8.29a1 1 0 0 0 1.41-1.41L19.41 18Z"
        fill={color}
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h36v36H0z" />
      </clipPath>
    </defs>
  </svg>
);

CloseModalIcon.propTypes = {
  color: PropTypes.string,
  size: PropTypes.number,
};
