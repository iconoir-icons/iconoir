import * as React from "react";
import { IconoirContext } from "./IconoirContext";

function SvgPcFirewall(
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
      <path
        d="M7 22h10"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2 17V4a2 2 0 012-2h16a2 2 0 012 2v13a2 2 0 01-2 2H4a2 2 0 01-2-2z"
        stroke="currentColor"
      />
      <path
        d="M12.485 6.121l3.06.765a.59.59 0 01.449.586C15.818 14 12 15 12 15s-3.818-1-3.994-7.528a.59.59 0 01.448-.586l3.06-.765a2 2 0 01.971 0z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const ForwardRef = React.forwardRef(SvgPcFirewall);
export default ForwardRef;
