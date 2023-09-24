import * as React from "react";
import { IconoirContext } from "./IconoirContext";
function SvgNetworkRightSolid(
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
      <rect
        width={7}
        height={5}
        rx={0.6}
        transform="matrix(0 -1 -1 0 22 21)"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth={1.5}
      />
      <rect
        width={7}
        height={5}
        rx={0.6}
        transform="matrix(0 -1 -1 0 7 15.5)"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth={1.5}
      />
      <rect
        width={7}
        height={5}
        rx={0.6}
        transform="matrix(0 -1 -1 0 22 10)"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth={1.5}
      />
      <path
        d="M17 17.5h-3.5a2 2 0 01-2-2v-7a2 2 0 012-2H17M11.5 12H7"
        stroke="currentColor"
      />
    </svg>
  );
}
const ForwardRef = React.forwardRef(SvgNetworkRightSolid);
export default ForwardRef;
