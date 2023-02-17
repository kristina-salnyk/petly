import * as React from 'react';
import PropTypes from 'prop-types';
import theme from '../../utils/theme';

export const AddPetCrossIcon = ({ size = 24, color = theme.colors.white, ...props }) => (
  <svg width={size} height={size} fill="none" viewBox="0 0 52 50" {...props}>
    <path
      d="M26 49V25m0 0V1m0 24h24.375M26 25H1.625"
      stroke={color}
      strokeOpacity={0.6}
      strokeWidth={2}
      strokeLinecap="round"
    />
  </svg>
);

AddPetCrossIcon.propTypes = {
  color: PropTypes.string,
  size: PropTypes.number,
};
