import * as React from "react";
import { IconoirContext } from "./IconoirContext";
function SvgBookmarkCircleSolid(
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
        d="M12 1.25C6.063 1.25 1.25 6.063 1.25 12S6.063 22.75 12 22.75 22.75 17.937 22.75 12 17.937 1.25 12 1.25zm-1 6A2.75 2.75 0 008.25 10v6a.75.75 0 001.166.624l1.89-1.26c.42-.28.968-.28 1.387 0l1.891 1.26A.75.75 0 0015.75 16v-6A2.75 2.75 0 0013 7.25h-2z"
        fill="currentColor"
      />
    </svg>
  );
}
const ForwardRef = React.forwardRef(SvgBookmarkCircleSolid);
export default ForwardRef;
