import * as React from 'react';

function SvgSwipeTwoFingersDownGesture(
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
        d="M6.5 12a3.5 3.5 0 110-7 3.5 3.5 0 010 7zm0 0v7m0 0L9 16.6M6.5 19L4 16.6M17.5 12a3.5 3.5 0 110-7 3.5 3.5 0 010 7zm0 0v7m0 0l2.5-2.4M17.5 19L15 16.6"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const ForwardRef = React.forwardRef(SvgSwipeTwoFingersDownGesture);
export default ForwardRef;
