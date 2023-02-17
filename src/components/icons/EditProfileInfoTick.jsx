import * as React from 'react';
import PropTypes from 'prop-types';
import theme from '../../utils/theme';

export const EditProfileInfoTick = ({ size = 20, color = theme.colors.accent, ...props }) => (
  <svg width={size} height={size} fill="none" viewBox="0 0 20 20" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M17.534 3.414a1.5 1.5 0 0 1 .052 2.12l-9.52 10a1.5 1.5 0 0 1-2.172 0l-4.48-4.706A1.5 1.5 0 0 1 3.586 8.76l3.394 3.565 8.434-8.86a1.5 1.5 0 0 1 2.12-.051Z"
      fill={color}
    />
  </svg>
);

EditProfileInfoTick.propTypes = {
  color: PropTypes.string,
  size: PropTypes.number,
};
