import * as React from 'react';
import PropTypes from 'prop-types';
import theme from '../../utils/theme';

export const DeleteMyPetIcon = ({ size = 24, color = theme.colors.black, ...props }) => (
  <svg width={size} height={size} fill="none" viewBox="0 0 24 24" {...props}>
    <path
      d="M10.5 4.5h3a1.5 1.5 0 1 0-3 0ZM9 4.5a3 3 0 1 1 6 0h6A.75.75 0 1 1 21 6h-.846l-1.808 13.257a3.75 3.75 0 0 1-3.715 3.243H9.369a3.75 3.75 0 0 1-3.715-3.243L3.846 6H3a.75.75 0 0 1 0-1.5h6Zm1.5 5.25a.75.75 0 1 0-1.5 0v7.5a.75.75 0 1 0 1.5 0v-7.5ZM14.25 9a.75.75 0 0 0-.75.75v7.5a.75.75 0 1 0 1.5 0v-7.5a.75.75 0 0 0-.75-.75Z"
      fill={color}
      fillOpacity={0.6}
    />
  </svg>
);

DeleteMyPetIcon.propTypes = {
  color: PropTypes.string,
  size: PropTypes.number,
};
