import * as React from "react";
import { IconoirContext } from "./IconoirContext";

function SvgTowerCheck(
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
        d="M13 19l3 3 5-5M9 22H7a2 2 0 01-2-2v-8.818a.6.6 0 00-.1-.333L3.1 8.15a.6.6 0 01-.1-.333V2.6a.6.6 0 01.6-.6h1.8a.6.6 0 01.6.6v1.8a.6.6 0 00.6.6h2.8a.6.6 0 00.6-.6V2.6a.6.6 0 01.6-.6h2.8a.6.6 0 01.6.6v1.8a.6.6 0 00.6.6h2.8a.6.6 0 00.6-.6V2.6a.6.6 0 01.6-.6h1.8a.6.6 0 01.6.6v5.218a.6.6 0 01-.1.333l-1.8 2.698a.6.6 0 00-.1.333V13.5"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const ForwardRef = React.forwardRef(SvgTowerCheck);
export default ForwardRef;
