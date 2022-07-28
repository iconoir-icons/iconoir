import * as React from "react";
import { IconoirContext } from "./IconoirContext";

function SvgFrame(
  passedProps: React.SVGProps<SVGSVGElement>,
  svgRef?: React.Ref<SVGSVGElement>
) {
  const context = React.useContext(IconoirContext);
  const props = { ...context, ...passedProps };
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
        d="M4.998 2.001H2v2.998h2.998V2.001zM4.998 10.502H2V13.5h2.998v-2.998zM20.498 5v5.503M3.5 5v5.503M20.498 13.502v5.502M3.5 13.502v5.502M4.999 20.502h5.5"
        stroke="currentColor"
        strokeMiterlimit={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4.999 3.503h5.5"
        stroke="currentColor"
        strokeWidth={1.22}
        strokeMiterlimit={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.498 20.499h5.5"
        stroke="currentColor"
        strokeMiterlimit={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.498 3.501h5.5"
        stroke="currentColor"
        strokeWidth={1.22}
        strokeMiterlimit={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4.998 19.001H2v2.998h2.998v-2.998zM21.997 2.002H19V5h2.998V2.002zM13.497 2H10.5v2.998h2.998V2zM21.997 10.503H19V13.5h2.998v-2.998zM21.997 19.002H19V22h2.998v-2.998zM13.497 19H10.5v2.998h2.998V19z"
        stroke="currentColor"
        strokeMiterlimit={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const ForwardRef = React.forwardRef(SvgFrame);
export default ForwardRef;
