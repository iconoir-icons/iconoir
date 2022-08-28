import * as React from "react";
import { IconoirContext } from "./IconoirContext";

function SvgBoxingGlove(
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
        d="M8.489 17.727h9.867m-9.867 0V21h9.867v-3.273m-9.867 0C5.2 15.546 3.556 10.091 4.104 8.455c.438-1.31 2.375-.91 3.289-.546C7.393 4.091 9.037 3 13.423 3 17.806 3 20 4.09 20 9.545c0 4.364-1.096 7.273-1.644 8.182"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.393 7.91C7.758 8.272 8.818 9 10.133 9h4.934M7.393 7.91c0 3.817 1.644 4.363 2.74 4.363"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const ForwardRef = React.forwardRef(SvgBoxingGlove);
export default ForwardRef;
