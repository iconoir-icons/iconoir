import * as React from 'react';

function SvgSwipeTwoFingersLeftGesture(
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
        d="M12 17.5a3.5 3.5 0 107 0 3.5 3.5 0 00-7 0zm0 0H5m0 0L7.4 15M5 17.5L7.4 20M12 6.5a3.5 3.5 0 107 0 3.5 3.5 0 00-7 0zm0 0H5m0 0L7.4 4M5 6.5L7.4 9"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const ForwardRef = React.forwardRef(SvgSwipeTwoFingersLeftGesture);
export default ForwardRef;
