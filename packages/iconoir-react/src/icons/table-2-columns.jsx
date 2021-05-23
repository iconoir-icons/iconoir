import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

export const Table2Columns = forwardRef(
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
            d="M3 20.4V3.6C3 3.26863 3.26863 3 3.6 3H20.4C20.7314 3 21 3.26863 21 3.6V20.4C21 20.7314 20.7314 21 20.4 21H3.6C3.26863 21 3 20.7314 3 20.4Z"
            stroke="currentColor"
            stroke-width="1.5"
          />
          <path d="M3 16.5H21" stroke="currentColor" stroke-width="1.5" />
          <path d="M3 12H21" stroke="currentColor" stroke-width="1.5" />
          <path d="M21 7.5H3" stroke="currentColor" stroke-width="1.5" />
          <path d="M12 21V3" stroke="currentColor" stroke-width="1.5" />
        </svg>
      </svg>
    );
  }
);

Table2Columns.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Table2Columns.displayName = 'Table2Columns';

export default Table2Columns;
