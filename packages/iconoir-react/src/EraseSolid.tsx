import * as React from "react";
import { IconoirContext } from "./IconoirContext";
function SvgEraseSolid(
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
        d="M21 21H9"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.914 3.414l4.95 4.95a2 2 0 010 2.828l-9.243 9.243a1.929 1.929 0 01-2.728 0l-5-5a2 2 0 010-2.828L7 8.5l4.75 4.75a1.768 1.768 0 102.5-2.5L9.5 6l2.586-2.586a2 2 0 012.828 0z"
        fill="currentColor"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
const ForwardRef = React.forwardRef(SvgEraseSolid);
export default ForwardRef;
