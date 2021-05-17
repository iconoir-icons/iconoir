import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

export const GoogleDrive = forwardRef(
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
            d="M9.14286 3.00375L14.8571 3M9.14286 3.00375L2 15.0038M9.14286 3.00375L18.4321 21M14.8571 3L22 15.0038M14.8571 3L5.575 21M18.4321 21H5.575M18.4321 21L22 15.0038M5.575 21L2 15.0038M22 15.0038L2 15.0038"
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

GoogleDrive.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

GoogleDrive.displayName = 'GoogleDrive';

export default GoogleDrive;
