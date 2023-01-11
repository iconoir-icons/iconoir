import * as React from "react";
import { IconoirContext } from "./IconoirContext";
function SvgStackoverflow(
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
        d="M19 15v6H5v-6M16 17H8M15.913 14.663L8.087 13M16.713 12.38L9.463 9M18.173 10.642L12.044 5.5M20.034 8.804L15.109 2.5"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
const ForwardRef = React.forwardRef(SvgStackoverflow);
export default ForwardRef;
