import * as React from 'react';
import PropTypes from 'prop-types';
import theme from '../../utils/theme';

export const FavoriteHeartIcon = ({
  size = 28,
  borderColor = theme.colors.accent,
  insideColor = theme.colors.white,
  ...props
}) => (
  <svg width={size} height={size} fill="none" viewBox="0 0 28 28" {...props}>
    <g filter="url(#a)">
      <g filter="url(#b)">
        <path
          d="M8 3C4.687 3 2 5.734 2 9.106c0 2.723 1.05 9.185 11.386 15.717a1.158 1.158 0 0 0 1.228 0C24.95 18.29 26 11.829 26 9.106 26 5.734 23.313 3 20 3s-6 3.7-6 3.7S11.313 3 8 3Z"
          fill={insideColor}
          fillOpacity={0.6}
        />
        <path
          d="M8 3C4.687 3 2 5.734 2 9.106c0 2.723 1.05 9.185 11.386 15.717a1.158 1.158 0 0 0 1.228 0C24.95 18.29 26 11.829 26 9.106 26 5.734 23.313 3 20 3s-6 3.7-6 3.7S11.313 3 8 3Z"
          stroke={borderColor}
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </g>
    <defs>
      <filter
        id="a"
        x={-100}
        y={-100}
        width={228}
        height={228}
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feGaussianBlur in="BackgroundImageFix" stdDeviation={50} />
        <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_120_584" />
        <feBlend in="SourceGraphic" in2="effect1_backgroundBlur_120_584" result="shape" />
      </filter>
      <filter
        id="b"
        x={-3}
        y={-2}
        width={34}
        height={32}
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feGaussianBlur in="BackgroundImageFix" stdDeviation={2} />
        <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_120_584" />
        <feBlend in="SourceGraphic" in2="effect1_backgroundBlur_120_584" result="shape" />
      </filter>
    </defs>
  </svg>
);

FavoriteHeartIcon.propTypes = {
  borderColor: PropTypes.string,
  insideColor: PropTypes.string,
  size: PropTypes.number,
};
