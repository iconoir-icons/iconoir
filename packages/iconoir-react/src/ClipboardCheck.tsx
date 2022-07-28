import * as React from "react";
import { IconoirContext } from "./IconoirContext";

function SvgClipboardCheck(
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
        d="M8.5 4H6a2 2 0 00-2 2v14a2 2 0 002 2h6M15.5 4H18a2 2 0 012 2v9"
        stroke="currentColor"
        strokeLinecap="round"
      />
      <path
        d="M8 6.4V4.5a.5.5 0 01.5-.5c.276 0 .504-.224.552-.496C9.2 2.652 9.774 1 12 1s2.8 1.652 2.948 2.504c.048.272.276.496.552.496a.5.5 0 01.5.5v1.9a.6.6 0 01-.6.6H8.6a.6.6 0 01-.6-.6z"
        stroke="currentColor"
        strokeLinecap="round"
      />
      <path
        d="M15.5 20.5l2 2 5-5"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const ForwardRef = React.forwardRef(SvgClipboardCheck);
export default ForwardRef;
