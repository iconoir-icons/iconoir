import * as React from "react";
import { IconoirContext } from "./IconoirContext";

function SvgEmoji(
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
        d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16.5 14.5s-1.5 2-4.5 2-4.5-2-4.5-2"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15.5 9a.5.5 0 110-1 .5.5 0 010 1zM8.5 9a.5.5 0 110-1 .5.5 0 010 1z"
        fill="currentColor"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const ForwardRef = React.forwardRef(SvgEmoji);
export default ForwardRef;
