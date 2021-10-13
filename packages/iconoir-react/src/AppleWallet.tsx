import * as React from 'react';

function SvgAppleWallet(
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
        d="M19 21H5a2 2 0 01-2-2V5a2 2 0 012-2h14a2 2 0 012 2v14a2 2 0 01-2 2z"
        stroke="currentColor"
      />
      <path
        d="M3 15h6.4c.331 0 .605.278.75.576.206.423.694.924 1.85.924 1.156 0 1.644-.5 1.85-.924.145-.298.419-.576.75-.576H21M3 7h18M3 11h18"
        stroke="currentColor"
      />
    </svg>
  );
}

const ForwardRef = React.forwardRef(SvgAppleWallet);
export default ForwardRef;
