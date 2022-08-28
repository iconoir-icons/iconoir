import * as React from "react";
import { IconoirContext } from "./IconoirContext";

function SvgUnion(
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
        d="M15 9h5.4a.6.6 0 01.6.6v10.8a.6.6 0 01-.6.6H9.6a.6.6 0 01-.6-.6V15"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15 9V3.6a.6.6 0 00-.6-.6H3.6a.6.6 0 00-.6.6v10.8a.6.6 0 00.6.6H9"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const ForwardRef = React.forwardRef(SvgUnion);
export default ForwardRef;
