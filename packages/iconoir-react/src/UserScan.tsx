import * as React from 'react';

function SvgUserScan(
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
        d="M6 3H3v3M18 3h3v3M6 21H3v-3M7 18v-1a5 5 0 015-5v0a5 5 0 015 5v1M12 12a3 3 0 100-6 3 3 0 000 6zM18 21h3v-3"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const ForwardRef = React.forwardRef(SvgUserScan);
export default ForwardRef;
