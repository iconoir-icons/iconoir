import * as React from "react";
import { IconoirContext } from "./IconoirContext";
function SvgAddDatabaseScript(
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
        d="M22 14V8.5M6 13V6a3 3 0 013-3h5M16.992 4h3m3 0h-3m0 0V1m0 3v3M12 21H6a4 4 0 010-8h12a4 4 0 104 4v-3"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
const ForwardRef = React.forwardRef(SvgAddDatabaseScript);
export default ForwardRef;
