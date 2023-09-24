import * as React from "react";
import { IconoirContext } from "./IconoirContext";
function SvgSparkSolid(
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
        d="M3 12c6.268 0 9-2.637 9-9 0 6.363 2.713 9 9 9-6.287 0-9 2.713-9 9 0-6.287-2.732-9-9-9z"
        fill="currentColor"
        stroke="currentColor"
        strokeLinejoin="round"
      />
    </svg>
  );
}
const ForwardRef = React.forwardRef(SvgSparkSolid);
export default ForwardRef;
