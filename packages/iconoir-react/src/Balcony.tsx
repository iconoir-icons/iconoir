import * as React from "react";
import { IconoirContext } from "./IconoirContext";
function SvgBalcony(
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
        d="M4 13v8M8 13v8M16 13v8M12 13v8M20 13v8M2 21h20M2 13h20M18 10V3.6a.6.6 0 00-.6-.6H6.6a.6.6 0 00-.6.6V10"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
const ForwardRef = React.forwardRef(SvgBalcony);
export default ForwardRef;
