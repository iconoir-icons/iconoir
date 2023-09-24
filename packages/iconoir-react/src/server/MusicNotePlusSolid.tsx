import * as React from "react";
function SvgMusicNotePlusSolid(
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
        d="M16 10h3m3 0h-3m0 0V7m0 3v3"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5 21H4a2 2 0 01-2-2v-1a2 2 0 012-2h3V4l5-1v4L7 8v11a2 2 0 01-2 2z"
        fill="currentColor"
      />
      <path
        d="M7 16v3a2 2 0 01-2 2H4a2 2 0 01-2-2v-1a2 2 0 012-2h3zm0 0V8m0 0V4l5-1v4L7 8z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
const ForwardRef = React.forwardRef(SvgMusicNotePlusSolid);
export default ForwardRef;
