import * as React from "react";
import { IconoirContext } from "./IconoirContext";

function SvgMultiplePagesDelete(
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
        d="M2.871 21.121L4.993 19m2.121-2.121L4.993 19m0 0L2.87 16.879M4.993 19l2.121 2.121M7 2h9.5L21 6.5V19"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11 22h5.5a1.5 1.5 0 001.5-1.5V8.749a.6.6 0 00-.176-.425l-3.148-3.148A.6.6 0 0014.25 5H4.5A1.5 1.5 0 003 6.5V13"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14 8.4V5.354a.354.354 0 01.604-.25l3.292 3.292a.353.353 0 01-.25.604H14.6a.6.6 0 01-.6-.6z"
        fill="currentColor"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const ForwardRef = React.forwardRef(SvgMultiplePagesDelete);
export default ForwardRef;
