import * as React from "react";
import { IconoirContext } from "./IconoirContext";
function SvgArrowDownLeftCircleSolid(
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
        d="M12 1.25C6.063 1.25 1.25 6.063 1.25 12S6.063 22.75 12 22.75 22.75 17.937 22.75 12 17.937 1.25 12 1.25zm3.359 8.452a.75.75 0 00-1.06-1.061l-4.377 4.377v-3.14a.75.75 0 10-1.5 0v4.95c0 .414.335.75.75.75h4.95a.75.75 0 000-1.5h-3.14l4.377-4.376z"
        fill="currentColor"
      />
    </svg>
  );
}
const ForwardRef = React.forwardRef(SvgArrowDownLeftCircleSolid);
export default ForwardRef;
