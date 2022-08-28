import * as React from "react";
import { IconoirContext } from "./IconoirContext";

function SvgPenTabletConnectWifi(
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
        d="M17 15.51l.01-.011M12 12c2.5-3 7.5-3 10 0M14 14c1.5-2 4.5-2 6 0"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M22 7V5a2 2 0 00-2-2H4a2 2 0 00-2 2v14a2 2 0 002 2h16a2 2 0 002-2v-2"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M2 12h4M6 3v18" stroke="currentColor" />
    </svg>
  );
}

const ForwardRef = React.forwardRef(SvgPenTabletConnectWifi);
export default ForwardRef;
