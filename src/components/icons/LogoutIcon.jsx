import * as React from 'react';
import PropTypes from 'prop-types';
import theme from '../../utils/theme';

export const LogoutIcon = ({ size = 18, color = theme.colors.accent, ...props }) => (
  <svg width={size} height={size} fill="none" viewBox="0 0 18 18" {...props}>
    <g opacity={0.6} clipPath="url(#a)">
      <path
        d="M15.204 11.146v-.001Zm.42.42Zm0-5.061Z"
        fill={color}
        stroke={color}
        strokeWidth={2}
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h18v18H0z" />
      </clipPath>
    </defs>
  </svg>
);

LogoutIcon.propTypes = {
  color: PropTypes.string,
  size: PropTypes.number,
};
