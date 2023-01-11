import * as React from "react";
import { IconoirContext } from "./IconoirContext";
function SvgEvPlugError(
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
        d="M10 13.154V21M15 8.385v2.769a2 2 0 01-2 2H7a2 2 0 01-2-2v-2.77a2 2 0 012-2h6a2 2 0 012 2zM13.333 6.385V3M6.667 6.385V3"
        stroke="currentColor"
        strokeLinecap="round"
      />
      <path
        d="M15.121 21.364l2.122-2.121m0 0l2.121-2.122m-2.121 2.122L15.12 17.12m2.122 2.122l2.121 2.121"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
const ForwardRef = React.forwardRef(SvgEvPlugError);
export default ForwardRef;
