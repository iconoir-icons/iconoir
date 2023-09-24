import * as React from "react";
import { IconoirContext } from "./IconoirContext";
function SvgHospitalCircleSolid(
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
        d="M12 1.25C6.063 1.25 1.25 6.063 1.25 12S6.063 22.75 12 22.75 22.75 17.937 22.75 12 17.937 1.25 12 1.25zM8.75 7a.75.75 0 00-1.5 0v10a.75.75 0 001.5 0v-4.25H15.25V17a.75.75 0 001.5 0V7a.75.75 0 00-1.5 0v4.25H8.75V7z"
        fill="currentColor"
      />
    </svg>
  );
}
const ForwardRef = React.forwardRef(SvgHospitalCircleSolid);
export default ForwardRef;
