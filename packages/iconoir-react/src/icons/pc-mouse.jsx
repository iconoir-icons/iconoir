import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

export const PcMouse = forwardRef(
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
            d="M12 2V2C16.4183 2 20 5.58172 20 10V14C20 18.4183 16.4183 22 12 22V22C7.58172 22 4 18.4183 4 14V10C4 5.58172 7.58172 2 12 2V2ZM12 2V9"
            stroke="black"
            stroke-width="1.5"
            stroke-linecap="round"
          />
        </svg>
      </svg>
    );
  }
);

PcMouse.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

PcMouse.displayName = 'PcMouse';

export default PcMouse;
