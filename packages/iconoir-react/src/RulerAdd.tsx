import * as React from 'react';

function SvgRulerAdd(
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
        d="M15 5h3m3 0h-3m0 0V2m0 3v3M11 7V2.6a.6.6 0 00-.6-.6H3.6a.6.6 0 00-.6.6v18.8a.6.6 0 00.6.6h6.8a.6.6 0 00.6-.6V17m0-10H8m3 0v5m0 0H8m3 0v5m0 0H8"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const ForwardRef = React.forwardRef(SvgRulerAdd);
export default ForwardRef;
