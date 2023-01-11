import * as React from "react";
import { IconoirContext } from "./IconoirContext";
function SvgTrello(
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
        d="M19 3H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0 00-2-2z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.4 6H6.6a.6.6 0 00-.6.6v10.8a.6.6 0 00.6.6h3.8a.6.6 0 00.6-.6V6.6a.6.6 0 00-.6-.6zM17.4 6h-3.8a.6.6 0 00-.6.6v6.8a.6.6 0 00.6.6h3.8a.6.6 0 00.6-.6V6.6a.6.6 0 00-.6-.6z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
const ForwardRef = React.forwardRef(SvgTrello);
export default ForwardRef;
