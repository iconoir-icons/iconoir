import * as React from "react";
import { IconoirContext } from "./IconoirContext";
function SvgCreditCardSlash(
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
      strokeWidth={1.5}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      color="currentColor"
      ref={svgRef}
      {...props}
    >
      <path
        d="M6 9h3M3 3l18 18M22 9v8a2 2 0 01-2 2H4a2 2 0 01-2-2V7a2 2 0 012-2h1m17 4V7a2 2 0 00-2-2H10m12 4h-8M9 9H6"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
const ForwardRef = React.forwardRef(SvgCreditCardSlash);
export default ForwardRef;
