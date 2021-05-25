import * as React from 'react';

function SvgFridge(
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
        d="M10 14H9M10 6H9"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5 10V2.6a.6.6 0 01.6-.6h12.8a.6.6 0 01.6.6V10M5 10v11.4a.6.6 0 00.6.6h12.8a.6.6 0 00.6-.6V10M5 10h14"
        stroke="currentColor"
        strokeWidth={1.5}
      />
    </svg>
  );
}

const ForwardRef = React.forwardRef(SvgFridge);
export default ForwardRef;
