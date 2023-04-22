import * as React from "react";
function SvgTruckGreen(
  props: React.SVGProps<SVGSVGElement>,
  svgRef?: React.Ref<SVGSVGElement>
) {
  return (
    <svg
      width="1.5em"
      height="1.5em"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      color="currentColor"
      ref={svgRef}
      {...props}
    >
      <path
        d="M7 17a2 2 0 100-4 2 2 0 000 4z"
        stroke="currentColor"
        strokeMiterlimit={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14 15V4.6a.6.6 0 00-.6-.6H2.6a.6.6 0 00-.6.6v9.8a.6.6 0 00.6.6h2.05M14 15H9.05M14 7h5.61a.6.6 0 01.548.356l1.29 2.903a.6.6 0 01.052.243V12"
        stroke="currentColor"
        strokeLinecap="round"
      />
      <path
        d="M17 23s.9-3.118 3-5M19.802 21.424l-.134.013a3.094 3.094 0 01-3.366-2.774 3.06 3.06 0 012.761-3.35l2.986-.28a.35.35 0 01.381.314l.255 2.58a3.194 3.194 0 01-2.883 3.497z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
const ForwardRef = React.forwardRef(SvgTruckGreen);
export default ForwardRef;
