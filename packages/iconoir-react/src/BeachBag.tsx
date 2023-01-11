import * as React from "react";
import { IconoirContext } from "./IconoirContext";
function SvgBeachBag(
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
        d="M2.77 13l-.633-3.287A.6.6 0 012.727 9h18.547a.6.6 0 01.589.713L21.23 13M2.769 13h18.462M2.769 13l.616 4m17.846-4l-.616 4m0 0l-.537 3.491a.6.6 0 01-.593.509H4.515a.6.6 0 01-.593-.509L3.385 17m17.23 0H3.385"
        stroke="currentColor"
      />
      <path d="M8 9V5a2 2 0 012-2h4a2 2 0 012 2v4" stroke="currentColor" />
    </svg>
  );
}
const ForwardRef = React.forwardRef(SvgBeachBag);
export default ForwardRef;
