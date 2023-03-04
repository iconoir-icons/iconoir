import * as React from "react";
import { IconoirContext } from "./IconoirContext";
function SvgUnjoin3D(
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
      strokeWidth={1.5}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      color="currentColor"
      ref={svgRef}
      {...props}
    >
      <path
        d="M11.5 7L9 12h6l-2.5 5M20.839 20.84h-3.536m3.536 0v-3.537m0 3.536L17 17M2.768 2.768h3.535m-3.535 0v3.535m0-3.535l3.839 3.839"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
const ForwardRef = React.forwardRef(SvgUnjoin3D);
export default ForwardRef;
