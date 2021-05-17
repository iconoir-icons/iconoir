import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

export const LayoutLeft = forwardRef(
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
            d="M3 9.75V3.6C3 3.26863 3.26863 3 3.6 3H20.4C20.7314 3 21 3.26863 21 3.6V9.75M3 9.75V20.4C3 20.7314 3.26863 21 3.6 21H9.75M3 9.75H9.75M21 9.75V20.4C21 20.7314 20.7314 21 20.4 21H9.75M21 9.75H9.75M9.75 9.75V21"
            stroke="currentColor"
            stroke-width="1.5"
          />
        </svg>
      </svg>
    );
  }
);

LayoutLeft.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

LayoutLeft.displayName = 'LayoutLeft';

export default LayoutLeft;
