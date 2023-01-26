import * as React from "react";
import { IconoirContext } from "./IconoirContext";
function SvgBrightCrown(
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
      <g
        clipPath="url(#bright-crown_svg__clip0_3057_14630)"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M22 12h1M12 2V1M12 23v-1M20 20l-1-1M20 4l-1 1M4 20l1-1M4 4l1 1M1 12h1M16.8 15.5l1.2-7-4.2 2.1L12 8.5l-1.8 2.1L6 8.5l1.2 7h9.6z" />
      </g>
      <defs>
        <clipPath id="bright-crown_svg__clip0_3057_14630">
          <path fill="#fff" d="M0 0h24v24H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}
const ForwardRef = React.forwardRef(SvgBrightCrown);
export default ForwardRef;
