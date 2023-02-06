import * as React from "react";
import { IconoirContext } from "./IconoirContext";
function SvgSoundOff(
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
      strokeWidth={1.5}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      color="currentColor"
      ref={svgRef}
      {...props}
    >
      <g clipPath="url(#sound-off_svg__clip0_3173_16686)" stroke="currentColor">
        <path
          d="M18 14l2-2m2-2l-2 2m0 0l-2-2m2 2l2 2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M2 13.857v-3.714a2 2 0 012-2h2.9a1 1 0 00.55-.165l6-3.956a1 1 0 011.55.835v14.286a1 1 0 01-1.55.835l-6-3.956a1 1 0 00-.55-.165H4a2 2 0 01-2-2z" />
      </g>
      <defs>
        <clipPath id="sound-off_svg__clip0_3173_16686">
          <path fill="#fff" d="M0 0h24v24H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}
const ForwardRef = React.forwardRef(SvgSoundOff);
export default ForwardRef;
