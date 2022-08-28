import * as React from "react";
import { IconoirContext } from "./IconoirContext";

function SvgAirplaneRotation(
  passedProps: React.SVGProps<SVGSVGElement>,
  svgRef?: React.Ref<SVGSVGElement>
) {
  const context = React.useContext(IconoirContext);
  const props = { ...context, ...passedProps };
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
        d="M9.879 14.122a3 3 0 104.242-4.243 3 3 0 00-4.242 4.243z"
        stroke="currentColor"
        strokeMiterlimit={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4.37 16.773A8.956 8.956 0 013.002 12c0-4.236 2.934-7.792 6.878-8.747A8.998 8.998 0 0112 3.002M19.715 7.367A8.953 8.953 0 0120.999 12c0 3.806-2.368 7.063-5.709 8.378-1.02.4-2.13.621-3.29.621"
        stroke="currentColor"
        strokeMiterlimit={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        clipRule="evenodd"
        d="M14.121 9.88s-.009-2.803 1.415-4.243c1.41-1.409 2.793-2.865 4.242-1.415 1.377 1.378.015 2.81-1.414 4.243-1.402 1.406-4.243 1.414-4.243 1.414zM9.879 14.12s.009 2.803-1.415 4.243c-1.41 1.409-2.793 2.865-4.242 1.415-1.377-1.378-.015-2.81 1.414-4.243 1.402-1.406 4.243-1.414 4.243-1.414z"
        stroke="currentColor"
        strokeMiterlimit={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const ForwardRef = React.forwardRef(SvgAirplaneRotation);
export default ForwardRef;
