import * as React from "react";
import { IconoirContext } from "./IconoirContext";
function SvgPercentageCircleSolid(
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
        d="M12 1.25C6.063 1.25 1.25 6.063 1.25 12S6.063 22.75 12 22.75 22.75 17.937 22.75 12 17.937 1.25 12 1.25zm3.5 13a1.25 1.25 0 100 2.5 1.25 1.25 0 000-2.5zM7.25 8.5a1.25 1.25 0 112.5 0 1.25 1.25 0 01-2.5 0zm8.22-1.03a.75.75 0 111.06 1.06l-8 8a.75.75 0 01-1.06-1.06l8-8z"
        fill="currentColor"
      />
    </svg>
  );
}
const ForwardRef = React.forwardRef(SvgPercentageCircleSolid);
export default ForwardRef;
