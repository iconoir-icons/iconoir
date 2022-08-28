import * as React from "react";
import { IconoirContext } from "./IconoirContext";

function SvgCity(
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
        d="M7 9.01l.01-.011M11 9.01l.01-.011M7 13.01l.01-.011M11 13.01l.01-.011M7 17.01l.01-.011M11 17.01l.01-.011M15 21H3.6a.6.6 0 01-.6-.6V5.6a.6.6 0 01.6-.6H9V3.6a.6.6 0 01.6-.6h4.8a.6.6 0 01.6.6V9m0 12h5.4a.6.6 0 00.6-.6V9.6a.6.6 0 00-.6-.6H15m0 12v-4m0-8v4m0 0h2m-2 0v4m0 0h2"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const ForwardRef = React.forwardRef(SvgCity);
export default ForwardRef;
