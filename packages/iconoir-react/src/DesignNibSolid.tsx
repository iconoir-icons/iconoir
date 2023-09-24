import * as React from "react";
import { IconoirContext } from "./IconoirContext";
function SvgDesignNibSolid(
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
      <g
        clipPath="url(#design-nib-solid_svg__clip0_3787_399)"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M17.674 11.408l-1.905 5.716a.6.6 0 01-.398.385L3.693 20.981a.6.6 0 01-.74-.765L6.745 8.842a.6.6 0 01.34-.365l5.387-2.218a.6.6 0 01.653.13l4.404 4.405a.6.6 0 01.145.614zM3.296 20.602l6.364-6.364" />
        <path
          d="M18.403 3.182l2.364 2.364a1.846 1.846 0 11-2.61 2.61l-2.365-2.364a1.846 1.846 0 012.61-2.61z"
          fill="currentColor"
        />
        <path d="M11.781 12.116a1.5 1.5 0 10-2.121 2.121 1.5 1.5 0 002.121-2.121z" />
      </g>
      <defs>
        <clipPath id="design-nib-solid_svg__clip0_3787_399">
          <path fill="#fff" d="M0 0h24v24H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}
const ForwardRef = React.forwardRef(SvgDesignNibSolid);
export default ForwardRef;
