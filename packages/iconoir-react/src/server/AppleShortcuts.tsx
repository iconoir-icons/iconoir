import * as React from "react";
function SvgAppleShortcuts(
  props: React.SVGProps<SVGSVGElement>,
  svgRef?: React.Ref<SVGSVGElement>
) {
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
        clipPath="url(#apple-shortcuts_svg__clip0_3190_17433)"
        stroke="currentColor"
      >
        <path d="M9.852 14.633l-6.2-3.946a2 2 0 010-3.374l6.2-3.946a4 4 0 014.296 0l6.2 3.946a2 2 0 010 3.374l-6.2 3.946a4 4 0 01-4.296 0z" />
        <path d="M18.286 12l2.063 1.313a2 2 0 010 3.374l-6.201 3.946a4 4 0 01-4.296 0l-6.2-3.946a2 2 0 010-3.374L5.714 12" />
      </g>
      <defs>
        <clipPath id="apple-shortcuts_svg__clip0_3190_17433">
          <path fill="#fff" d="M0 0h24v24H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}
const ForwardRef = React.forwardRef(SvgAppleShortcuts);
export default ForwardRef;
