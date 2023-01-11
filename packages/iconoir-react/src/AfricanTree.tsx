import * as React from "react";
import { IconoirContext } from "./IconoirContext";
function SvgAfricanTree(
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
        clipPath="url(#african-tree_svg__clip0_2032_8254)"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 22V12m0-4v4m0 0l3-3M12.424 18.576l6.169-6.169a5.502 5.502 0 00-.513-8.234 9.904 9.904 0 00-12.16 0 5.502 5.502 0 00-.513 8.234l6.169 6.169a.6.6 0 00.848 0z" />
      </g>
      <defs>
        <clipPath id="african-tree_svg__clip0_2032_8254">
          <path fill="#fff" d="M0 0h24v24H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}
const ForwardRef = React.forwardRef(SvgAfricanTree);
export default ForwardRef;
