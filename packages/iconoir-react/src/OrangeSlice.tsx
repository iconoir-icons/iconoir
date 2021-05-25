import * as React from 'react';

function SvgOrangeSlice(
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
        d="M10.613 10.11l7.778-7.777c4.295 4.296 4.295 11.26 0 15.556-4.296 4.296-11.261 4.296-15.557 0l7.779-7.778zm0 0l-.354 8.133m.354-8.132h7.778m-7.778 0l5.303 5.303"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const ForwardRef = React.forwardRef(SvgOrangeSlice);
export default ForwardRef;
