import * as React from "react";
import { IconoirContext } from "./IconoirContext";
function SvgNumber5SquareSolid(
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
        d="M3.6 2.25A1.35 1.35 0 002.25 3.6v16.8c0 .746.604 1.35 1.35 1.35h16.8a1.35 1.35 0 001.35-1.35V3.6a1.35 1.35 0 00-1.35-1.35H3.6zM13.75 13.5c0 1.062-.76 1.75-1.75 1.75-1.131 0-1.75-.707-1.75-1.25a.75.75 0 00-1.5 0c0 1.666 1.62 2.75 3.25 2.75 1.771 0 3.25-1.312 3.25-3.25 0-.836-.17-1.645-.632-2.262-.488-.652-1.225-.988-2.118-.988h-2.115l.25-1.5H14a.75.75 0 000-1.5h-4a.75.75 0 00-.74.627l-.5 3a.75.75 0 00.74.873h3c.488 0 .75.164.917.387.193.258.333.7.333 1.363z"
        fill="currentColor"
      />
    </svg>
  );
}
const ForwardRef = React.forwardRef(SvgNumber5SquareSolid);
export default ForwardRef;
