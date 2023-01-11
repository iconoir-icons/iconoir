import * as React from "react";
import { IconoirContext } from "./IconoirContext";
function SvgPentagon(
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
        d="M11.647 2.256a.6.6 0 01.706 0l9.756 7.089a.6.6 0 01.218.67L18.6 21.485a.6.6 0 01-.57.414H5.97a.6.6 0 01-.57-.414l-3.727-11.47a.6.6 0 01.218-.67l9.756-7.089z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
const ForwardRef = React.forwardRef(SvgPentagon);
export default ForwardRef;
