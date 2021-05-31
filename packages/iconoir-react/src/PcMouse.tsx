import * as React from 'react';

function SvgPcMouse(
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
        d="M12 2v0a8 8 0 018 8v4a8 8 0 01-8 8v0a8 8 0 01-8-8v-4a8 8 0 018-8v0zm0 0v7"
        stroke="currentColor"
        strokeLinecap="round"
      />
    </svg>
  );
}

const ForwardRef = React.forwardRef(SvgPcMouse);
export default ForwardRef;
