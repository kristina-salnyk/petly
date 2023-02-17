import * as React from 'react';
import PropTypes from 'prop-types';
import theme from '../../utils/theme';

export const DeleteNoticeIcon = ({ color = theme.colors.brightAccent, size = 20, ...props }) => (
  <svg width={size} height={size} fill="none" viewBox="0 0 20 20" {...props}>
    <path
      d="M8.75 3.75h2.5a1.25 1.25 0 0 0-2.5 0Zm-1.25 0a2.5 2.5 0 1 1 5 0h5a.625.625 0 1 1 0 1.25h-.705l-1.506 11.047a3.125 3.125 0 0 1-3.096 2.703H7.808a3.125 3.125 0 0 1-3.097-2.703L3.205 5H2.5a.625.625 0 0 1 0-1.25h5Zm1.25 4.375a.625.625 0 0 0-1.25 0v6.25a.625.625 0 1 0 1.25 0v-6.25Zm3.125-.625a.625.625 0 0 0-.625.625v6.25a.624.624 0 1 0 1.25 0v-6.25a.625.625 0 0 0-.625-.625Z"
      fill={color}
    />
  </svg>
);

DeleteNoticeIcon.propTypes = {
  color: PropTypes.string,
  size: PropTypes.number,
};
