import * as React from "react";
import { IconoirContext } from "./IconoirContext";
function SvgGroup(
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
        d="M1 20v-1a7 7 0 017-7v0a7 7 0 017 7v1"
        stroke="currentColor"
        strokeLinecap="round"
      />
      <path
        d="M13 14v0a5 5 0 015-5v0a5 5 0 015 5v.5"
        stroke="currentColor"
        strokeLinecap="round"
      />
      <path
        d="M8 12a4 4 0 100-8 4 4 0 000 8zM18 9a3 3 0 100-6 3 3 0 000 6z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
const ForwardRef = React.forwardRef(SvgGroup);
export default ForwardRef;
