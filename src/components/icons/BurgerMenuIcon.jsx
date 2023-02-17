import * as React from 'react';
import PropTypes from 'prop-types';
import theme from '../../utils/theme';

export const BurgerMenuIcon = ({ size = 40, color = theme.colors.burgerBlack, ...props }) => (
  <svg width={size} height={size} fill="none" viewBox="0 0 40 40" {...props}>
    <g clipPath="url(#a)">
      <path d="M5 30h30v-3.333H5V30Zm0-8.333h30v-3.334H5v3.334ZM5 10v3.333h30V10H5Z" fill={color} />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h40v40H0z" />
      </clipPath>
    </defs>
  </svg>
);

BurgerMenuIcon.propTypes = {
  color: PropTypes.string,
  size: PropTypes.number,
};
