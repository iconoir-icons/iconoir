import * as React from "react";
import { IconoirContext } from "./IconoirContext";

function SvgLeaf(
  passedProps: React.SVGProps<SVGSVGElement>,
  svgRef?: React.Ref<SVGSVGElement>
) {
  const context = React.useContext(IconoirContext);
  const props = { ...context, ...passedProps };
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
        d="M7 21s.5-4.5 4-8.5M19.13 4.242l.594 6.175c.374 3.886-2.54 7.346-6.425 7.72-3.813.367-7.267-2.42-7.634-6.233a6.936 6.936 0 016.239-7.569l6.571-.632a.6.6 0 01.655.54z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const ForwardRef = React.forwardRef(SvgLeaf);
export default ForwardRef;
