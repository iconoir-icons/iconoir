import * as React from 'react';

function SvgBatteryIndicator(
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
        d="M14 13h4M6 13h2m2 0H8m0 0v-2m0 2v2M6 7H2.6a.6.6 0 00-.6.6v10.8a.6.6 0 00.6.6h18.8a.6.6 0 00.6-.6V7.6a.6.6 0 00-.6-.6H18M6 7V5h2v2M6 7h2m0 0h8m0 0V5h2v2m-2 0h2"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const ForwardRef = React.forwardRef(SvgBatteryIndicator);
export default ForwardRef;
