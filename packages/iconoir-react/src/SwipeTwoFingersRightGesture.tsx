import * as React from 'react';

function SvgSwipeTwoFingersRightGesture(
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
        d="M12 17.5a3.5 3.5 0 11-7 0 3.5 3.5 0 017 0zm0 0h7m0 0L16.6 15m2.4 2.5L16.6 20M12 6.5a3.5 3.5 0 11-7 0 3.5 3.5 0 017 0zm0 0h7m0 0L16.6 4M19 6.5L16.6 9"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const ForwardRef = React.forwardRef(SvgSwipeTwoFingersRightGesture);
export default ForwardRef;
