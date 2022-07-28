import * as React from "react";
import { IconoirContext } from "./IconoirContext";

function SvgNumberedListLeft(
  passedProps: React.SVGProps<SVGSVGElement>,
  svgRef?: React.Ref<SVGSVGElement>
) {
  const context = React.useContext(IconoirContext);
  const props = { ...context, ...passedProps };
  return (
    <svg
      width="1.5em"
      strokeWidth={1.5}
      height="1.5em"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      color="currentColor"
      ref={svgRef}
      {...props}
    >
      <path
        d="M9 6h11M5 8V4M6 14H4.6a.6.6 0 01-.6-.6v-.8a.6.6 0 01.6-.6h.8a.6.6 0 00.6-.6v-.8a.6.6 0 00-.6-.6H4M4 16h1.4a.6.6 0 01.6.6v2.8a.6.6 0 01-.6.6H4M6 18H4M9 12h11M9 18h11"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const ForwardRef = React.forwardRef(SvgNumberedListLeft);
export default ForwardRef;
