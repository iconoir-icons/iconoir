import * as React from "react";
import { IconoirContext } from "./IconoirContext";
function SvgAlignRightBox(
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
        d="M8.006 20.005l.01-.01M4.006 20.005l.01-.01M4.006 16.005l.01-.01M4.006 12.005l.01-.01M4.006 8.005l.01-.01M4.006 4.005l.01-.01M8.006 4.005l.01-.01M12.006 20.005h8v-16h-8v16z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
const ForwardRef = React.forwardRef(SvgAlignRightBox);
export default ForwardRef;
