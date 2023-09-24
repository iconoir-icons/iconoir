import * as React from "react";
import { IconoirContext } from "./IconoirContext";
function SvgServerConnectionSolid(
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
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      color="currentColor"
      ref={svgRef}
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.25 5A.75.75 0 016 4.25h12a.75.75 0 01.75.75v8a.75.75 0 01-.75.75h-5.25v4.5H21a.75.75 0 010 1.5H3a.75.75 0 010-1.5h8.25v-4.5H6a.75.75 0 01-.75-.75V5zm4.262 3.442A.75.75 0 019.567 9.5l-.01.01a.75.75 0 11-1.114-1.003l.01-.01a.75.75 0 011.059-.056zM12.568 9.5a.75.75 0 10-1.115-1.004l-.01.011a.75.75 0 101.114 1.004l.01-.011z"
        fill="currentColor"
      />
    </svg>
  );
}
const ForwardRef = React.forwardRef(SvgServerConnectionSolid);
export default ForwardRef;
