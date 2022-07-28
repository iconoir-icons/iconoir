import * as React from "react";
import { IconoirContext } from "./IconoirContext";

function SvgFlash(
  passedProps: React.SVGProps<SVGSVGElement>,
  svgRef?: React.Ref<SVGSVGElement>
) {
  const context = React.useContext(IconoirContext);
  const props = { ...context, ...passedProps };
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
        d="M8.426 13.006c-.057 0-.057 0-.115-.006-.633-.07-1.095-.698-1.032-1.402l.61-7.445C7.95 3.5 8.445 3 9.037 3H13.5c.128 0 .254.023.375.07.602.23.922.958.715 1.627l-1.49 4.105h2.748c.203 0 .402.06.578.173.55.356.738 1.14.418 1.75-.414.816-4.58 7.816-5.926 10.075-.107.18-.381.092-.37-.117L11 13l-2.573.006z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const ForwardRef = React.forwardRef(SvgFlash);
export default ForwardRef;
