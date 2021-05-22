import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

export const Cell4x4 = forwardRef(
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
            d="M21 3.6V12H12V3H20.4C20.7314 3 21 3.26863 21 3.6Z"
            stroke="currentColor"
            stroke-width="1.5"
          />
          <path
            d="M21 20.4V12H12V21H20.4C20.7314 21 21 20.7314 21 20.4Z"
            stroke="currentColor"
            stroke-width="1.5"
          />
          <path
            d="M3 12V3.6C3 3.26863 3.26863 3 3.6 3H12V12H3Z"
            stroke="currentColor"
            stroke-width="1.5"
          />
          <path
            d="M3 12V20.4C3 20.7314 3.26863 21 3.6 21H12V12H3Z"
            stroke="currentColor"
            stroke-width="1.5"
          />
        </svg>
      </svg>
    );
  }
);

Cell4x4.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Cell4x4.displayName = 'Cell4x4';

export default Cell4x4;
