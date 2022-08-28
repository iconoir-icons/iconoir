import * as React from "react";
import { IconoirContext } from "./IconoirContext";

function SvgBook(
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
        d="M4 19V5a2 2 0 012-2h13.4a.6.6 0 01.6.6v13.114M6 17h14M6 21h14"
        stroke="currentColor"
        strokeLinecap="round"
      />
      <path
        d="M6 21a2 2 0 110-4"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M9 7h6" stroke="currentColor" strokeLinecap="round" />
    </svg>
  );
}

const ForwardRef = React.forwardRef(SvgBook);
export default ForwardRef;
