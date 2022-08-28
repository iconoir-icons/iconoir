import * as React from "react";
import { IconoirContext } from "./IconoirContext";

function SvgWindows(
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
        d="M4 16.986V7.014a.6.6 0 01.507-.593l14.8-2.313a.6.6 0 01.693.593v14.598a.6.6 0 01-.693.593l-14.8-2.313A.6.6 0 014 16.986zM4 12h16M10.5 5.5v13"
        stroke="currentColor"
      />
    </svg>
  );
}

const ForwardRef = React.forwardRef(SvgWindows);
export default ForwardRef;
