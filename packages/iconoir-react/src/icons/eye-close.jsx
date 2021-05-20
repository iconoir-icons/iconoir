import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

export const EyeClose = forwardRef(
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
            d="M4.5 15.5C5.15216 14.087 6.08786 12.9811 7.18383 12.1825M19.5 15.5C18.8478 14.087 17.9121 12.9811 16.8162 12.1825M12 10.625V7M12 10.625C10.3043 10.625 8.60864 11.1442 7.18383 12.1825M12 10.625C13.6957 10.625 15.3914 11.1442 16.8162 12.1825M7.18383 12.1825L4.5 8.5M16.8162 12.1825L19.5 8.5"
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

EyeClose.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

EyeClose.displayName = 'EyeClose';

export default EyeClose;
