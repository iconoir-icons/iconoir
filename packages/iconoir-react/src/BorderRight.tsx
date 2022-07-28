import * as React from "react";
import { IconoirContext } from "./IconoirContext";

function SvgBorderRight(
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
        d="M4 20l.01.01M4 16l.01.01M4 12l.01.01M4 8l.01.01M4 4l.01.01M16 4l.01.01M12 4l.01.01M12 12l.01.01M8 4l.01.01M16 20l.01.01M12 20l.01.01M8 20l.01.01M20.01 4v16"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const ForwardRef = React.forwardRef(SvgBorderRight);
export default ForwardRef;
