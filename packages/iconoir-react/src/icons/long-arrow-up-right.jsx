import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

export const LongArrowUpRight = forwardRef(
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
            d="M16.75 8.25L10.75 8.25C8.54086 8.25 6.75 10.0409 6.75 12.25L6.75 19.25M16.75 8.25L13.25 4.75M16.75 8.25L13.25 11.75"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </svg>
    );
  }
);

LongArrowUpRight.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

LongArrowUpRight.displayName = 'LongArrowUpRight';

export default LongArrowUpRight;
