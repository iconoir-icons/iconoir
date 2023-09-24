import * as React from "react";
import { IconoirContext } from "./IconoirContext";
function SvgPriorityUpSolid(
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
      <g clipPath="url(#priority-up-solid_svg__clip0_3839_8163)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12.955.893a1.35 1.35 0 00-1.91 0L.894 11.045a1.35 1.35 0 000 1.91l10.151 10.15a1.35 1.35 0 001.91 0l10.151-10.15a1.35 1.35 0 000-1.91L12.955.893zM12.53 6.47a.75.75 0 00-1.071.01l-4 4.167a.75.75 0 101.082 1.04l2.709-2.823V16a.75.75 0 001.5 0V8.81l2.72 2.72a.75.75 0 101.06-1.06l-4-4z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="priority-up-solid_svg__clip0_3839_8163">
          <path fill="#fff" d="M0 0h24v24H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}
const ForwardRef = React.forwardRef(SvgPriorityUpSolid);
export default ForwardRef;
