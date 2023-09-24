import * as React from "react";
function SvgRefreshCircleSolid(
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
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1.25 12C1.25 6.063 6.063 1.25 12 1.25S22.75 6.063 22.75 12 17.937 22.75 12 22.75 1.25 17.937 1.25 12zm10.738-4.25c-2.287 0-4.04 1.532-4.243 3.334a.75.75 0 01-1.49-.168c.301-2.69 2.821-4.666 5.733-4.666 1.67 0 3.198.644 4.262 1.697V7.5a.75.75 0 011.5 0v1.622a1.35 1.35 0 01-1.35 1.35h-1.906a.75.75 0 010-1.5h.658c-.77-.74-1.89-1.222-3.164-1.222zm.024 8.5c2.146 0 4.018-1.828 4.24-4.317a.75.75 0 011.495.134c-.28 3.126-2.682 5.683-5.735 5.683-1.708 0-3.219-.807-4.262-2.062v.712a.75.75 0 01-1.5 0v-2.177c0-.746.604-1.35 1.35-1.35h1.906a.75.75 0 010 1.5h-.873c.79 1.158 2.027 1.877 3.38 1.877z"
        fill="currentColor"
      />
    </svg>
  );
}
const ForwardRef = React.forwardRef(SvgRefreshCircleSolid);
export default ForwardRef;
