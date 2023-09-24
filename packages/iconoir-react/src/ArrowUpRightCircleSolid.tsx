import * as React from "react";
import { IconoirContext } from "./IconoirContext";
function SvgArrowUpRightCircleSolid(
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
        d="M12 1.25C6.063 1.25 1.25 6.063 1.25 12S6.063 22.75 12 22.75 22.75 17.937 22.75 12 17.937 1.25 12 1.25zM9.879 8.421h4.95a.747.747 0 01.75.75v4.95a.75.75 0 01-1.5 0v-3.139l-4.377 4.377a.75.75 0 11-1.06-1.061l4.376-4.377h-3.14a.75.75 0 010-1.5z"
        fill="currentColor"
      />
    </svg>
  );
}
const ForwardRef = React.forwardRef(SvgArrowUpRightCircleSolid);
export default ForwardRef;
