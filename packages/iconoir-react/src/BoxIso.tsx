import * as React from "react";
import { IconoirContext } from "./IconoirContext";
function SvgBoxIso(
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
      strokeWidth={1.5}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      color="currentColor"
      ref={svgRef}
      {...props}
    >
      <path
        d="M2.695 7.185l9 4 .61-1.37-9-4-.61 1.37zM12.75 21.5v-11h-1.5v11h1.5zm-.445-10.315l9-4-.61-1.37-9 4 .61 1.37z"
        fill="currentColor"
      />
      <path
        d="M3 17.11V6.89a.6.6 0 01.356-.548l8.4-3.734a.6.6 0 01.488 0l8.4 3.734A.6.6 0 0121 6.89v10.22a.6.6 0 01-.356.548l-8.4 3.734a.6.6 0 01-.488 0l-8.4-3.734A.6.6 0 013 17.11z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.5 4.5l8.644 3.842a.6.6 0 01.356.548v3.61"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
const ForwardRef = React.forwardRef(SvgBoxIso);
export default ForwardRef;
