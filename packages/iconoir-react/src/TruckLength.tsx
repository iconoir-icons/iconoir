import * as React from 'react';

function SvgTruckLength(
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
        d="M7 16a2 2 0 100-4 2 2 0 000 4zM17 16a2 2 0 100-4 2 2 0 000 4z"
        stroke="currentColor"
        strokeMiterlimit={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14 14V3.6a.6.6 0 00-.6-.6H2.6a.6.6 0 00-.6.6v9.8a.6.6 0 00.6.6h2.05M14 14H9.05M14 6h5.61a.6.6 0 01.548.356l1.79 4.028a.6.6 0 01.052.243V13.4a.6.6 0 01-.6.6h-1.9M14 14h1"
        stroke="currentColor"
        strokeLinecap="round"
      />
      <path
        d="M3 20h17.75M3 20l1.75 1.75M3 20l1.75-1.75m16 1.75L19 21.75M20.75 20L19 18.25"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const ForwardRef = React.forwardRef(SvgTruckLength);
export default ForwardRef;
