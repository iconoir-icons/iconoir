import * as React from "react";
function SvgPriorityDownSolid(
  props: React.SVGProps<SVGSVGElement>,
  svgRef?: React.Ref<SVGSVGElement>
) {
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
      <g clipPath="url(#priority-down-solid_svg__clip0_3839_8166)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12.955.893a1.35 1.35 0 00-1.91 0L.894 11.045a1.35 1.35 0 000 1.91l10.151 10.15a1.35 1.35 0 001.91 0l10.151-10.15a1.35 1.35 0 000-1.91L12.955.893zM12.53 16.53a.75.75 0 01-1.071-.01l-4-4.167a.75.75 0 111.082-1.04l2.709 2.823V7a.75.75 0 011.5 0v7.19l2.72-2.72a.75.75 0 111.06 1.06l-4 4z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="priority-down-solid_svg__clip0_3839_8166">
          <path fill="#fff" d="M0 0h24v24H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}
const ForwardRef = React.forwardRef(SvgPriorityDownSolid);
export default ForwardRef;
