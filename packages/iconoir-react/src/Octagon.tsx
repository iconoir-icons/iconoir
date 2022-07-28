import * as React from "react";
import { IconoirContext } from "./IconoirContext";

function SvgOctagon(
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
        d="M11.77 1.095a.6.6 0 01.46 0l7.319 3.032a.6.6 0 01.324.324l3.032 7.32a.6.6 0 010 .459l-3.032 7.319a.6.6 0 01-.324.324l-7.32 3.032a.6.6 0 01-.459 0l-7.319-3.032a.6.6 0 01-.324-.324l-3.032-7.32a.6.6 0 010-.459l3.032-7.319a.6.6 0 01.324-.324l7.32-3.032z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const ForwardRef = React.forwardRef(SvgOctagon);
export default ForwardRef;
