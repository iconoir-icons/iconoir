import * as React from "react";
import { IconoirContext } from "./IconoirContext";
function SvgCommunity(
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
      strokeWidth={1.5}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      color="currentColor"
      ref={svgRef}
      {...props}
    >
      <path
        d="M7 18v-1a5 5 0 015-5v0a5 5 0 015 5v1M1 18v-1a3 3 0 013-3v0M23 18v-1a3 3 0 00-3-3v0M12 12a3 3 0 100-6 3 3 0 000 6zM4 14a2 2 0 100-4 2 2 0 000 4zM20 14a2 2 0 100-4 2 2 0 000 4z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
const ForwardRef = React.forwardRef(SvgCommunity);
export default ForwardRef;
