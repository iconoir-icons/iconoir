import * as React from "react";
import { IconoirContext } from "./IconoirContext";
function SvgAreaSearch(
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
      strokeWidth={1.5}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      color="currentColor"
      ref={svgRef}
      {...props}
    >
      <path
        d="M20.124 20.119a3 3 0 10-4.248-4.237 3 3 0 004.248 4.237zm0 0L22 22M7 2H4v3M4 11v2M11 2h2M11 22h2M20 11v2M17 2h3v3M7 22H4v-3"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
const ForwardRef = React.forwardRef(SvgAreaSearch);
export default ForwardRef;
