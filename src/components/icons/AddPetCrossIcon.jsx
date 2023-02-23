import * as React from 'react';
import PropTypes from 'prop-types';
import theme from '../../utils/theme';

export const AddPetCrossIcon = ({ size = 32, color = theme.colors.white, ...props }) => (
  <svg width={size} height={size} fill="none" viewBox="0 0 32 32" {...props}>
    <path d="M16 26.666V16v10.666ZM16 16V5.333 16Zm0 0h10.666H16Zm0 0H5.333 16Z" fill="#fff" />
    <path
      d="M16 26.666V16m0 0V5.333M16 16h10.666M16 16H5.333"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
    />
  </svg>
);

AddPetCrossIcon.propTypes = {
  color: PropTypes.string,
  size: PropTypes.number,
};
