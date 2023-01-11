import * as React from "react";
import { IconoirContext } from "./IconoirContext";
function SvgGoogleDriveSync(
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
        d="M9.143 3.004L14.857 3m-5.714.004L2 15.004m7.143-12l4.902 9.496m.812-9.5L5.575 21m9.282-18l5.356 9M5.575 21L2 15.004M5.575 21h6.429M2 15.004h10.5M22.666 17.667C22.048 16.097 20.634 15 18.99 15c-1.758 0-3.252 1.255-3.793 3"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20.995 17.772H22.4a.6.6 0 00.6-.6V15.55M15.334 20.333C15.952 21.903 17.366 23 19.01 23c1.758 0 3.252-1.255 3.793-3"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17.005 20.228H15.6a.6.6 0 00-.6.6v1.622"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
const ForwardRef = React.forwardRef(SvgGoogleDriveSync);
export default ForwardRef;
