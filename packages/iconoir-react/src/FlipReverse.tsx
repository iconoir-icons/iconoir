import * as React from "react";
import { IconoirContext } from "./IconoirContext";

function SvgFlipReverse(
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
        d="M9.5 12v2M5.75 12l-.938 2M7.625 20H9.5v-2M3.875 20H2l.938-2M7.625 8L9.5 4v4M14.5 20H22L14.5 4v16z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const ForwardRef = React.forwardRef(SvgFlipReverse);
export default ForwardRef;
