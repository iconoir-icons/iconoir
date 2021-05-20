import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

export const MouseButtonRight = forwardRef(
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
            d="M12 2H13C16.866 2 20 5.13401 20 9M12 2V8.4C12 8.73137 12.2686 9 12.6 9H20M12 2C7.58172 2 4 5.58172 4 10L4 14C4 18.4183 7.58172 22 12 22C16.4183 22 20 18.4183 20 14V9"
            stroke="black"
            stroke-width="1.5"
            stroke-linecap="round"
          />
        </svg>
      </svg>
    );
  }
);

MouseButtonRight.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

MouseButtonRight.displayName = 'MouseButtonRight';

export default MouseButtonRight;
