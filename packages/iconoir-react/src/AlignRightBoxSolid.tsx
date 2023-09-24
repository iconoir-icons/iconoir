import * as React from "react";
import { IconoirContext } from "./IconoirContext";
function SvgAlignRightBoxSolid(
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
        d="M8.005 20.005l.011-.01M4.005 20.005l.011-.01M4.005 16.005l.011-.01M4.005 12.005l.011-.01M4.005 8.005l.011-.01M4.005 4.005l.011-.01M8.005 4.005l.011-.01"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.005 20.005h8v-16h-8v16z"
        fill="currentColor"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
const ForwardRef = React.forwardRef(SvgAlignRightBoxSolid);
export default ForwardRef;
