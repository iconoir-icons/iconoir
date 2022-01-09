import * as React from 'react';

function SvgQuote(
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
        d="M10 12H5a1 1 0 01-1-1V7.5a1 1 0 011-1h4a1 1 0 011 1V12zm0 0c0 2.5-1 4-4 5.5M20 12h-5a1 1 0 01-1-1V7.5a1 1 0 011-1h4a1 1 0 011 1V12zm0 0c0 2.5-1 4-4 5.5"
        stroke="currentColor"
        strokeLinecap="round"
      />
    </svg>
  );
}

const ForwardRef = React.forwardRef(SvgQuote);
export default ForwardRef;
