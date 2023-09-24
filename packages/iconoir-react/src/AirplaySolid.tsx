import * as React from "react";
import { IconoirContext } from "./IconoirContext";
function SvgAirplaySolid(
  passedProps: React.SVGProps<SVGSVGElement>,
  svgRef?: React.Ref<SVGSVGElement>
) {
  const context = React.useContext(IconoirContext);
  const props = {
    ...context,
    ...passedProps,
  };
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
        d="M6 17H3V4h18v13h-3"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.622 19.067L11.5 14.75a.6.6 0 01.998 0l2.88 4.318a.6.6 0 01-.5.933H9.12a.6.6 0 01-.5-.933z"
        fill="currentColor"
        stroke="currentColor"
      />
    </svg>
  );
}
const ForwardRef = React.forwardRef(SvgAirplaySolid);
export default ForwardRef;
