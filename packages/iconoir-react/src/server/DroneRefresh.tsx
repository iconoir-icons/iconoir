import * as React from "react";
function SvgDroneRefresh(
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
        d="M14.5 12.5l.426-3.834A.6.6 0 0014.33 8H9.67a.6.6 0 00-.596.666l.867 7.8a.6.6 0 00.596.534H11"
        stroke="currentColor"
        strokeLinecap="round"
      />
      <path
        d="M4.5 7a2.5 2.5 0 100-5 2.5 2.5 0 000 5z"
        stroke="currentColor"
        strokeMiterlimit={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4.5 4.5L9 8M4.5 19.5l5-4M19.5 4.5L15 8"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4.5 22a2.5 2.5 0 100-5 2.5 2.5 0 000 5zM19.5 7a2.5 2.5 0 100-5 2.5 2.5 0 000 5z"
        stroke="currentColor"
        strokeMiterlimit={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M21.666 16.667C21.048 15.097 19.634 14 17.99 14c-1.758 0-3.252 1.255-3.793 3"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M19.995 16.772H21.4a.6.6 0 00.6-.6V14.55M14.334 19.333C14.952 20.903 16.366 22 18.01 22c1.758 0 3.252-1.255 3.793-3"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16.005 19.228H14.6a.6.6 0 00-.6.6v1.622"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
const ForwardRef = React.forwardRef(SvgDroneRefresh);
export default ForwardRef;
