import * as React from 'react';

function SvgBusOutline(
  props: React.SVGProps<SVGSVGElement>,
  svgRef?: React.Ref<SVGSVGElement>
) {
  return (
    <svg
      width="1.5em"
      height="1.5em"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      color="currentColor"
      ref={svgRef}
      {...props}
    >
      <path
        d="M7 16.01l.01-.011M17 16.01l.01-.011M3 12h18v7a1 1 0 01-1 1H4a1 1 0 01-1-1v-7zM21 8V6a4 4 0 00-4-4H7a4 4 0 00-4 4v2M7 8h10"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4 20h4v2a1 1 0 01-1 1H5a1 1 0 01-1-1v-2zM16 20h4v2a1 1 0 01-1 1h-2a1 1 0 01-1-1v-2z"
        fill="currentColor"
      />
    </svg>
  );
}

const ForwardRef = React.forwardRef(SvgBusOutline);
export default ForwardRef;
