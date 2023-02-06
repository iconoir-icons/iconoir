import * as React from "react";
import { IconoirContext } from "./IconoirContext";
function SvgArchery(
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
        d="M8 12h9m-9 0l-2-2H2l2 2-2 2h4l2-2zm9 0l-2-2m2 2l-2 2M16 22.5c2.761 0 5-4.701 5-10.5S18.761 1.5 16 1.5 11 6.201 11 12s2.239 10.5 5 10.5z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
const ForwardRef = React.forwardRef(SvgArchery);
export default ForwardRef;
