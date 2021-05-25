import * as React from 'react';

function SvgHorizDistributionRight(
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
        d="M5 17V7m0 10h5.4a.6.6 0 00.6-.6V7.6a.6.6 0 00-.6-.6H5m0 10v3M5 7V4M15 17V7m0 10h3.4a.6.6 0 00.6-.6V7.6a.6.6 0 00-.6-.6H15m0 10v3m0-13V4"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const ForwardRef = React.forwardRef(SvgHorizDistributionRight);
export default ForwardRef;
