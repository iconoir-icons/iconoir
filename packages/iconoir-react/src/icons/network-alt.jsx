import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

export const NetworkAlt = forwardRef(
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
          <rect
            width="7"
            height="5"
            rx="0.6"
            transform="matrix(1 0 0 -1 3 22)"
            stroke="currentColor"
            stroke-width="1.5"
          />
          <rect
            width="7"
            height="5"
            rx="0.6"
            transform="matrix(1 0 0 -1 8.5 7)"
            stroke="currentColor"
            stroke-width="1.5"
          />
          <rect
            width="7"
            height="5"
            rx="0.6"
            transform="matrix(1 0 0 -1 14 22)"
            stroke="currentColor"
            stroke-width="1.5"
          />
          <path
            d="M6.5 17V13.5C6.5 12.3954 7.39543 11.5 8.5 11.5H12M17.5 17V13.5C17.5 12.3954 16.6046 11.5 15.5 11.5H12M12 11.5V7"
            stroke="currentColor"
            stroke-width="1.5"
          />
        </svg>
      </svg>
    );
  }
);

NetworkAlt.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

NetworkAlt.displayName = 'NetworkAlt';

export default NetworkAlt;
