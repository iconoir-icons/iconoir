import * as React from "react";
import { IconoirContext } from "./IconoirContext";

function SvgWifiIssue(
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
        d="M2.126 8.324c-.2-.262-.155-.605.086-.79C5.29 5.179 8.552 4 11.999 4c3.447 0 6.71 1.178 9.788 3.535.252.212.28.558.085.789l-9.455 11.173a.548.548 0 01-.836 0L2.126 8.324z"
        stroke="currentColor"
      />
      <path
        d="M12 8v2M12 14.01l.01-.011"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const ForwardRef = React.forwardRef(SvgWifiIssue);
export default ForwardRef;
