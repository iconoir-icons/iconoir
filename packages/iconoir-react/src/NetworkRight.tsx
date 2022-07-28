import * as React from "react";
import { IconoirContext } from "./IconoirContext";

function SvgNetworkRight(
  passedProps: React.SVGProps<SVGSVGElement>,
  svgRef?: React.Ref<SVGSVGElement>
) {
  const context = React.useContext(IconoirContext);
  const props = { ...context, ...passedProps };
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
      <rect
        width={7}
        height={5}
        rx={0.6}
        transform="matrix(0 -1 -1 0 22 21)"
        stroke="currentColor"
      />
      <rect
        width={7}
        height={5}
        rx={0.6}
        transform="matrix(0 -1 -1 0 7 15.5)"
        stroke="currentColor"
      />
      <rect
        width={7}
        height={5}
        rx={0.6}
        transform="matrix(0 -1 -1 0 22 10)"
        stroke="currentColor"
      />
      <path
        d="M17 17.5h-3.5a2 2 0 01-2-2v-7a2 2 0 012-2H17M11.5 12H7"
        stroke="currentColor"
      />
    </svg>
  );
}

const ForwardRef = React.forwardRef(SvgNetworkRight);
export default ForwardRef;
