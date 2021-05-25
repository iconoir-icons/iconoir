import * as React from 'react';

function SvgPharmacyCircledCross(
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
        d="M13.9 18h-3.8a.6.6 0 01-.6-.6v-2.3a.6.6 0 00-.6-.6H6.6a.6.6 0 01-.6-.6v-3.8a.6.6 0 01.6-.6h2.3a.6.6 0 00.6-.6V6.6a.6.6 0 01.6-.6h3.8a.6.6 0 01.6.6v2.3a.6.6 0 00.6.6h2.3a.6.6 0 01.6.6v3.8a.6.6 0 01-.6.6h-2.3a.6.6 0 00-.6.6v2.3a.6.6 0 01-.6.6z"
        stroke="currentColor"
        strokeWidth={1.5}
      />
      <path
        d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const ForwardRef = React.forwardRef(SvgPharmacyCircledCross);
export default ForwardRef;
