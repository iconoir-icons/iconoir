import * as React from 'react';

function SvgDb(
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
        d="M5 12v6s0 3 7 3 7-3 7-3v-6"
        stroke="currentColor"
        strokeWidth={1.5}
      />
      <path
        d="M5 6v6s0 3 7 3 7-3 7-3V6"
        stroke="currentColor"
        strokeWidth={1.5}
      />
      <path
        d="M12 3c7 0 7 3 7 3s0 3-7 3-7-3-7-3 0-3 7-3z"
        stroke="currentColor"
        strokeWidth={1.5}
      />
    </svg>
  );
}

const ForwardRef = React.forwardRef(SvgDb);
export default ForwardRef;
