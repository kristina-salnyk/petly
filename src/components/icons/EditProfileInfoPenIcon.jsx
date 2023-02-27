import * as React from 'react';
import PropTypes from 'prop-types';
import theme from '../../utils/theme';

export const EditProfileInfoPenIcon = ({ size = 20, color = theme.colors.accent, ...props }) => (
  <svg width={size} height={size} fill="none" viewBox="0 0 20 20 " {...props}>
    <path
      d="M3.683 17.149a.833.833 0 0 1-.614-.272.824.824 0 0 1-.219-.636l.204-2.245 9.432-9.429 2.947 2.947-9.429 9.428-2.245.204a.8.8 0 0 1-.076.003ZM16.022 6.925l-2.947-2.947 1.768-1.767a.833.833 0 0 1 1.179 0l1.767 1.767a.834.834 0 0 1 0 1.18l-1.767 1.766Z"
      fill={color}
      fillOpacity={0.6}
    />
  </svg>
);

EditProfileInfoPenIcon.propTypes = {
  color: PropTypes.string,
  size: PropTypes.number,
};
