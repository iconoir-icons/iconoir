import * as React from 'react';

function SvgUserCircleAlt(
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
        d="M7 18v-1a5 5 0 015-5v0a5 5 0 015 5v1"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
      />
      <path
        d="M12 12a3 3 0 100-6 3 3 0 000 6z"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx={12} cy={12} r={10} stroke="currentColor" strokeWidth={1.5} />
    </svg>
  );
}

const ForwardRef = React.forwardRef(SvgUserCircleAlt);
export default ForwardRef;
