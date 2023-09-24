import * as React from "react";
import { IconoirContext } from "./IconoirContext";
function SvgNetworkReverseSolid(
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
        transform="matrix(1 0 0 -1 3 22)"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth={1.5}
      />
      <rect
        width={7}
        height={5}
        rx={0.6}
        transform="matrix(1 0 0 -1 8.5 7)"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth={1.5}
      />
      <rect
        width={7}
        height={5}
        rx={0.6}
        transform="matrix(1 0 0 -1 14 22)"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth={1.5}
      />
      <path
        d="M6.5 17v-3.5a2 2 0 012-2h7a2 2 0 012 2V17M12 11.5V7"
        stroke="currentColor"
      />
    </svg>
  );
}
const ForwardRef = React.forwardRef(SvgNetworkReverseSolid);
export default ForwardRef;
