import * as React from "react";
import { IconoirContext } from "./IconoirContext";
function SvgArrowUpLeftCircleSolid(
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
        d="M12 1.25C6.063 1.25 1.25 6.063 1.25 12S6.063 22.75 12 22.75 22.75 17.937 22.75 12 17.937 1.25 12 1.25zm2.121 7.171h-4.95a.748.748 0 00-.75.75v4.95a.75.75 0 001.5 0v-3.139l4.377 4.377a.75.75 0 101.06-1.061L10.983 9.92h3.14a.75.75 0 000-1.5z"
        fill="currentColor"
      />
    </svg>
  );
}
const ForwardRef = React.forwardRef(SvgArrowUpLeftCircleSolid);
export default ForwardRef;
