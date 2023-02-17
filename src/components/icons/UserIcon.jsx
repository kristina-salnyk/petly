import * as React from 'react';
import PropTypes from 'prop-types';
import theme from '../../utils/theme';

export const UserIcon = ({ size = 28, color = theme.colors.white, ...props }) => (
  <svg width={size} height={size} fill="none" viewBox="0 0 28 28" {...props}>
    <path
      d="M14 2.333C7.56 2.333 2.333 7.56 2.333 14c0 6.44 5.227 11.667 11.667 11.667 6.44 0 11.666-5.227 11.666-11.667C25.666 7.56 20.44 2.333 14 2.333ZM14 7a4.088 4.088 0 0 1 4.083 4.083A4.088 4.088 0 0 1 14 15.167a4.088 4.088 0 0 1-4.084-4.084A4.088 4.088 0 0 1 14 7Zm0 16.333c-2.369 0-5.169-.956-7.164-3.36a11.604 11.604 0 0 1 14.327 0c-1.995 2.404-4.795 3.36-7.163 3.36Z"
      fill={color}
    />
  </svg>
);

UserIcon.propTypes = {
  color: PropTypes.string,
  size: PropTypes.number,
};
