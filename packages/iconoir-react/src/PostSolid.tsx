import * as React from "react";
import { IconoirContext } from "./IconoirContext";
function SvgPostSolid(
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
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.784 1.356a2.75 2.75 0 00-3.186 2.231l-2.43 13.787a2.75 2.75 0 002.23 3.186l11.818 2.084a2.75 2.75 0 003.185-2.23l2.431-13.788a2.75 2.75 0 00-2.23-3.186L7.784 1.356zM9.06 5.643A.75.75 0 108.8 7.12l7.878 1.39a.75.75 0 00.26-1.478L9.06 5.643zm-1.563 4.548a.75.75 0 01.869-.608l7.878 1.389a.75.75 0 11-.26 1.477l-7.879-1.39a.75.75 0 01-.608-.868zm.174 3.33a.75.75 0 10-.26 1.477l4.924.869a.75.75 0 10.26-1.478l-4.924-.868z"
        fill="currentColor"
      />
    </svg>
  );
}
const ForwardRef = React.forwardRef(SvgPostSolid);
export default ForwardRef;
