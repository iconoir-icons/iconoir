import * as React from 'react';

function SvgBoldSquareOutline(
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
        d="M3 20.4V3.6a.6.6 0 01.6-.6h16.8a.6.6 0 01.6.6v16.8a.6.6 0 01-.6.6H3.6a.6.6 0 01-.6-.6z"
        stroke="currentColor"
        strokeWidth={1.5}
      />
      <path
        d="M12 12H9m3 0s2.5 0 2.5-2.5S12 7 12 7s0 0 0 0H9.6a.6.6 0 00-.6.6V12m3 0s3 0 3 2.75-3 2.75-3 2.75 0 0 0 0H9.6a.6.6 0 01-.6-.6V12"
        stroke="currentColor"
        strokeWidth={1.5}
      />
    </svg>
  );
}

const ForwardRef = React.forwardRef(SvgBoldSquareOutline);
export default ForwardRef;
