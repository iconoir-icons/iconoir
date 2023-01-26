import * as React from "react";
import { IconoirContext } from "./IconoirContext";
function SvgSineWave(
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
        d="M3 12c0-3.857 1.286-9 3.857-9 3.857 0 6.429 18 10.286 18C19.714 21 21 15.857 21 12M3 12h2M19 12h2M15.5 12h1M7.5 12h1"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
const ForwardRef = React.forwardRef(SvgSineWave);
export default ForwardRef;
