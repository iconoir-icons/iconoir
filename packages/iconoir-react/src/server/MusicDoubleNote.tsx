import * as React from "react";
function SvgMusicDoubleNote(
  props: React.SVGProps<SVGSVGElement>,
  svgRef?: React.Ref<SVGSVGElement>
) {
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
      <path
        d="M20 14V3L9 5v11"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17 19h1a2 2 0 002-2v-3h-3a2 2 0 00-2 2v1a2 2 0 002 2zM6 21h1a2 2 0 002-2v-3H6a2 2 0 00-2 2v1a2 2 0 002 2z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
const ForwardRef = React.forwardRef(SvgMusicDoubleNote);
export default ForwardRef;
