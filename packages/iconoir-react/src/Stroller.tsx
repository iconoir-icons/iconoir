import * as React from "react";
import { IconoirContext } from "./IconoirContext";
function SvgStroller(
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
      <g
        clipPath="url(#stroller_svg__clip0)"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M11.5 3a8.5 8.5 0 00-7.212 13M18.712 16A8.46 8.46 0 0020 11.5v-2h2.5M8 21a2 2 0 110-4 2 2 0 010 4zM15 21a2 2 0 110-4 2 2 0 010 4zM11.5 3v9M3.5 12h16" />
      </g>
      <defs>
        <clipPath id="stroller_svg__clip0">
          <path fill="#fff" d="M0 0h24v24H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}
const ForwardRef = React.forwardRef(SvgStroller);
export default ForwardRef;
