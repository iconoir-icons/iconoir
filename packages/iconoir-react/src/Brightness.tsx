import * as React from "react";
import { IconoirContext } from "./IconoirContext";
function SvgBrightness(
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
        d="M12 7l1.53 1.304 2.006.16.16 2.005L17 12l-1.305 1.53-.16 2.006-2.004.16L12 17l-1.53-1.305-2.006-.16-.16-2.004L7 12l1.304-1.53.16-2.006 2.005-.16L12 7z"
        stroke="currentColor"
      />
      <path
        d="M10.47 15.695L12 17V7l-1.53 1.304-2.006.16-.16 2.005L7 12l1.304 1.53.16 2.006 2.005.16z"
        fill="currentColor"
      />
      <path
        d="M21 3.6v16.8a.6.6 0 01-.6.6H3.6a.6.6 0 01-.6-.6V3.6a.6.6 0 01.6-.6h16.8a.6.6 0 01.6.6z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
const ForwardRef = React.forwardRef(SvgBrightness);
export default ForwardRef;
