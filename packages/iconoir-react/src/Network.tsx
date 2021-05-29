import * as React from 'react';

function SvgNetwork(
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
      <rect x={3} y={2} width={7} height={5} rx={0.6} stroke="currentColor" />
      <rect
        x={8.5}
        y={17}
        width={7}
        height={5}
        rx={0.6}
        stroke="currentColor"
      />
      <rect x={14} y={2} width={7} height={5} rx={0.6} stroke="currentColor" />
      <path
        d="M6.5 7v3.5a2 2 0 002 2h7a2 2 0 002-2V7M12 12.5V17"
        stroke="currentColor"
      />
    </svg>
  );
}

const ForwardRef = React.forwardRef(SvgNetwork);
export default ForwardRef;
