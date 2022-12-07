import * as React from "react";
import { IconoirContext } from "./IconoirContext";

function SvgRadiation(
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
        d="M17 20.662a9.955 9.955 0 01-5 1.337 9.954 9.954 0 01-5-1.337L10 16s1 .4 2 .4 2-.4 2-.4l3 4.662zM16.998 3.339A9.954 9.954 0 0120.656 7a9.954 9.954 0 011.342 5l-5.537-.268s-.154-1.066-.654-1.932c-.5-.866-1.346-1.532-1.346-1.532l2.537-4.93zM1.998 12A9.954 9.954 0 013.34 7a9.954 9.954 0 013.658-3.66l2.537 4.928S8.69 8.934 8.19 9.8c-.5.866-.654 1.932-.654 1.932L1.998 12zM12 14a2 2 0 110-4 2 2 0 010 4z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const ForwardRef = React.forwardRef(SvgRadiation);
export default ForwardRef;
