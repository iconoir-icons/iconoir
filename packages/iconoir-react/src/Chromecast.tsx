import * as React from "react";
import { IconoirContext } from "./IconoirContext";

function SvgChromecast(
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
        d="M2 20.01l.01-.011M15 20h5a2 2 0 002-2V6a2 2 0 00-2-2H4a2 2 0 00-2 2v1M2 16c2 .5 3.5 2 4 4M2 12c4 .5 7.5 4 8 8"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const ForwardRef = React.forwardRef(SvgChromecast);
export default ForwardRef;
