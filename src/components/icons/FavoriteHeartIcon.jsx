import * as React from 'react';
import PropTypes from 'prop-types';
import theme from '../../utils/theme';

export const FavoriteHeartIcon = ({
  width = 17,
  heigth = 18,
  color = theme.colors.accent,
  ...props
}) => (
  <svg width={width} height={heigth} fill="none" viewBox="0 0 17 18" {...props}>
    <g clipPath="url(#a)">
      <path
        d="M5.167 2C3.326 2 1.833 3.477 1.833 5.3c0 1.471.584 4.963 6.326 8.493a.657.657 0 0 0 .682 0c5.742-3.53 6.326-7.022 6.326-8.493 0-1.823-1.493-3.3-3.334-3.3C9.993 2 8.5 4 8.5 4S7.007 2 5.167 2Z"
        fill={color}
        stroke={color}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill={theme.colors.white} transform="translate(.5)" d="M0 0h16v16H0z" />
      </clipPath>
    </defs>
  </svg>
);

FavoriteHeartIcon.propTypes = {
  color: PropTypes.string,
  width: PropTypes.number,
  heigth: PropTypes.number,
};
