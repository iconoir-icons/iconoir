import * as React from "react";
import { IconoirContext } from "./IconoirContext";

function SvgBasketballField(
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
        d="M12 5h9.4a.6.6 0 01.6.6v12.8a.6.6 0 01-.6.6H12m0-14H2.6a.6.6 0 00-.6.6v12.8a.6.6 0 00.6.6H12m0-14v14"
        stroke="currentColor"
      />
      <path
        d="M12 15a3 3 0 110-6 3 3 0 010 6zM2 17A5 5 0 002 7M22 17a5 5 0 010-10"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const ForwardRef = React.forwardRef(SvgBasketballField);
export default ForwardRef;
