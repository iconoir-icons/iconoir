import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

export const Battery25 = forwardRef(
  ({ color = 'currentColor', size = 24 }, ref) => {
    return (
      <svg
        ref={ref}
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        color={color}
        xmlns="http://www.w3.org/2000/svg"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M23 10V14"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M1 16V8C1 6.89543 1.89543 6 3 6H18C19.1046 6 20 6.89543 20 8V16C20 17.1046 19.1046 18 18 18H3C1.89543 18 1 17.1046 1 16Z"
            stroke="currentColor"
            stroke-width="1.5"
          />
          <path
            d="M4 14.4V9.6C4 9.26863 4.26863 9 4.6 9H6.4C6.73137 9 7 9.26863 7 9.6V14.4C7 14.7314 6.73137 15 6.4 15H4.6C4.26863 15 4 14.7314 4 14.4Z"
            stroke="currentColor"
            stroke-width="1.5"
          />
        </svg>
      </svg>
    );
  }
);

Battery25.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Battery25.displayName = 'Battery25';

export default Battery25;
