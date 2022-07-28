import * as React from "react";
import { IconoirContext } from "./IconoirContext";

function SvgArcheryMatch(
  passedProps: React.SVGProps<SVGSVGElement>,
  svgRef?: React.Ref<SVGSVGElement>
) {
  const context = React.useContext(IconoirContext);
  const props = { ...context, ...passedProps };
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
        d="M8.611 15.89l12.02-12.022M8.612 15.89H5.783l-2.829 2.829h2.829v2.828l2.828-2.828v-2.829zm12.02-12.02h-2.828m2.829 0v2.828M15.39 15.89L3.367 3.867M15.39 15.89h2.829l2.828 2.829h-2.828v2.828l-2.829-2.828v-2.829zM3.37 3.87h2.828m-2.829 0v2.828"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const ForwardRef = React.forwardRef(SvgArcheryMatch);
export default ForwardRef;
