import * as React from 'react';

function SvgDialpad(
  props: React.SVGProps<SVGSVGElement>,
  svgRef?: React.Ref<SVGSVGElement>
) {
  return (
    <svg
      width="1.5em"
      height="1.5em"
      strokeWidth={1.5}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      color="currentColor"
      ref={svgRef}
      {...props}
    >
      <path
        d="M6 7a1 1 0 110-2 1 1 0 010 2zM12 7a1 1 0 110-2 1 1 0 010 2zM18 7a1 1 0 110-2 1 1 0 010 2zM6 13a1 1 0 110-2 1 1 0 010 2zM12 13a1 1 0 110-2 1 1 0 010 2zM18 13a1 1 0 110-2 1 1 0 010 2zM12 19a1 1 0 110-2 1 1 0 010 2z"
        fill="currentColor"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const ForwardRef = React.forwardRef(SvgDialpad);
export default ForwardRef;
