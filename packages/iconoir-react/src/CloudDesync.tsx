import * as React from "react";
import { IconoirContext } from "./IconoirContext";

function SvgCloudDesync(
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
        d="M20 17.607c1.494-.585 3-1.918 3-4.607 0-4-3.333-5-5-5 0-2 0-6-6-6S6 6 6 8c-1.667 0-5 1-5 5 0 2.689 1.506 4.022 3 4.607M16.42 19.487l-1.768 1.768a4 4 0 01-5.656 0l-.354-.353"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16.067 21.962l.353-2.475-2.475.354 2.122 2.121zM7.58 16.902l1.768-1.768a4 4 0 015.657 0l.354.353"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.934 14.427l-.353 2.475 2.474-.354-2.12-2.121z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const ForwardRef = React.forwardRef(SvgCloudDesync);
export default ForwardRef;
