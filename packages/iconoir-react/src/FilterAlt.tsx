import * as React from 'react';

function SvgFilterAlt(
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
        d="M3 7V4a1 1 0 011-1h16a1 1 0 011 1v3M3 7l6.65 5.7a1 1 0 01.35.76v6.26a1 1 0 001.242.97l2-.5a1 1 0 00.758-.97v-5.76a1 1 0 01.35-.76L21 7M3 7h18"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const ForwardRef = React.forwardRef(SvgFilterAlt);
export default ForwardRef;
