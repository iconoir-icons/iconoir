import * as React from "react";
import { IconoirContext } from "./IconoirContext";
function SvgHomeShield(
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
        d="M12.502 9.13l2.049.531c.264.069.45.309.441.582C14.826 15.232 12 16 12 16s-2.826-.768-2.992-5.757a.584.584 0 01.441-.582l2.05-.53a2 2 0 011.003 0zM2 8l9.732-4.866a.6.6 0 01.536 0L22 8"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20 11v8a2 2 0 01-2 2H6a2 2 0 01-2-2v-8"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
const ForwardRef = React.forwardRef(SvgHomeShield);
export default ForwardRef;
