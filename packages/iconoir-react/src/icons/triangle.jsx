import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

export const Triangle = forwardRef(
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
            d="M11.4752 2.94682C11.7037 2.53464 12.2963 2.53464 12.5248 2.94682L21.8985 19.8591C22.1202 20.259 21.831 20.75 21.3738 20.75H2.62625C2.16902 20.75 1.87981 20.259 2.10146 19.8591L11.4752 2.94682Z"
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

Triangle.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Triangle.displayName = 'Triangle';

export default Triangle;
