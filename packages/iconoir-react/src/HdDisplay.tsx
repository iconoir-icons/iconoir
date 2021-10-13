import * as React from 'react';

function SvgHdDisplay(
  props: React.SVGProps<SVGSVGElement>,
  svgRef?: React.Ref<SVGSVGElement>
) {
  return (
    <svg
      width="1.5em"
      strokeWidth={1.5}
      height="1.5em"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      color="currentColor"
      ref={svgRef}
      {...props}
    >
      <path
        d="M5.5 8.5V12m0 3.5V12m0 0H10m0 0V8.5m0 3.5v3.5M13.5 12V8.5c2.5 0 5 0 5 3.5s-2.5 3.5-5 3.5V12z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2 18.4V5.6a.6.6 0 01.6-.6h18.8a.6.6 0 01.6.6v12.8a.6.6 0 01-.6.6H2.6a.6.6 0 01-.6-.6z"
        stroke="currentColor"
      />
    </svg>
  );
}

const ForwardRef = React.forwardRef(SvgHdDisplay);
export default ForwardRef;
