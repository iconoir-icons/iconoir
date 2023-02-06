import * as React from "react";
import { IconoirContext } from "./IconoirContext";
function SvgSoundMin(
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
        d="M3.5 13.857v-3.714a2 2 0 012-2h2.9a1 1 0 00.55-.165l6-3.956a1 1 0 011.55.835v14.286a1 1 0 01-1.55.835l-6-3.956a1 1 0 00-.55-.165H5.5a2 2 0 01-2-2z"
        stroke="currentColor"
      />
      <path d="M20.5 15V9" stroke="currentColor" strokeLinecap="round" />
    </svg>
  );
}
const ForwardRef = React.forwardRef(SvgSoundMin);
export default ForwardRef;
