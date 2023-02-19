import * as React from 'react';
import PropTypes from 'prop-types';

export const FemalePetIcon = ({ size = 60, color = '#FF8787', ...props }) => (
  <svg width={size} height={size} fill="none" viewBox="0 0 60 60" {...props}>
    <g filter="url(#a)">
      <path
        d="M30 0C19.357 0 10.727 8.63 10.727 19.273c0 8.813 5.919 16.246 13.997 18.542.922.262 1.606 1.075 1.606 2.033v2.553a2 2 0 0 1-2 2h-4.266a2 2 0 0 0-2 2v3.337a2 2 0 0 0 2 2h4.266a2 2 0 0 1 2 2V58a2 2 0 0 0 2 2h3.337a2 2 0 0 0 2-2v-4.262a2 2 0 0 1 2-2h4.265a2 2 0 0 0 2-2v-3.337a2 2 0 0 0-2-2h-4.265a2 2 0 0 1-2-2v-4.204c8.889-1.713 15.606-9.535 15.606-18.924C49.273 8.63 40.643 0 30 0Zm0 7.664c6.412 0 11.61 5.197 11.61 11.61 0 6.41-5.198 11.608-11.61 11.608-6.411 0-11.609-5.197-11.609-11.609s5.198-11.61 11.61-11.61Z"
        fill={color}
      />
    </g>
    <defs>
      <filter
        id="a"
        x={-1}
        y={-3}
        width={61}
        height={65}
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
        <feColorMatrix
          in="SourceAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy={-3} />
        <feGaussianBlur stdDeviation={2} />
        <feComposite in2="hardAlpha" operator="arithmetic" k2={-1} k3={1} />
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
        <feBlend in2="shape" result="effect1_innerShadow_65_1534" />
        <feColorMatrix
          in="SourceAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dx={-1} dy={2} />
        <feGaussianBlur stdDeviation={1.5} />
        <feComposite in2="hardAlpha" operator="arithmetic" k2={-1} k3={1} />
        <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.57 0" />
        <feBlend in2="effect1_innerShadow_65_1534" result="effect2_innerShadow_65_1534" />
      </filter>
    </defs>
  </svg>
);

FemalePetIcon.propTypes = {
  color: PropTypes.string,
  size: PropTypes.number,
};
