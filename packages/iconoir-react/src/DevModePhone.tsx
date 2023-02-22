import * as React from "react";
import { IconoirContext } from "./IconoirContext";
function SvgDevModePhone(
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
        d="M12 19.01l.01-.011"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18 18v3.4a.6.6 0 01-.6.6H6.6a.6.6 0 01-.6-.6V18M18 6V2.6a.6.6 0 00-.6-.6H6.6a.6.6 0 00-.6.6V6"
        stroke="currentColor"
        strokeLinecap="round"
      />
      <path
        d="M15.5 8.5L19 12l-3.5 3.5M8.5 8.5L5 12l3.5 3.5"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
const ForwardRef = React.forwardRef(SvgDevModePhone);
export default ForwardRef;
