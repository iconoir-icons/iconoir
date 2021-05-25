import * as React from 'react';

function SvgEvStation(
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
        d="M21 5v4"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5 19V9a2 2 0 012-2h9a2 2 0 012 2v10a2 2 0 01-2 2H7a2 2 0 01-2-2z"
        stroke="currentColor"
        strokeWidth={1.5}
      />
      <path
        d="M5 10V5a2 2 0 012-2h9a2 2 0 012 2v5"
        stroke="currentColor"
        strokeWidth={1.5}
      />
      <path
        d="M11.167 11L9.5 14h4l-1.667 3"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const ForwardRef = React.forwardRef(SvgEvStation);
export default ForwardRef;
