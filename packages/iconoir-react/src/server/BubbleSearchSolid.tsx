import * as React from "react";
function SvgBubbleSearchSolid(
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
        d="M22.586 10.173a2.249 2.249 0 01-2.177-.582l-.541-.541a4.75 4.75 0 01-5.19-7.371 7.652 7.652 0 00-1.604-.376A10.871 10.871 0 0012 1.25C6.063 1.25 1.25 6.063 1.25 12c0 1.856.471 3.605 1.3 5.13l-.787 4.233a.75.75 0 00.874.874l4.233-.788c1.525.83 3.274 1.301 5.13 1.301 5.937 0 10.75-4.813 10.75-10.75 0-.362-.018-.72-.053-1.074 0 0-.045-.325-.111-.753zM19.97 5.97a.75.75 0 011.06 0l1.5 1.5a.75.75 0 01-1.06 1.06l-1.5-1.5a.75.75 0 010-1.06z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18.5 2.75a1.75 1.75 0 100 3.5 1.75 1.75 0 000-3.5zM15.25 4.5a3.25 3.25 0 116.5 0 3.25 3.25 0 01-6.5 0z"
        fill="currentColor"
      />
    </svg>
  );
}
const ForwardRef = React.forwardRef(SvgBubbleSearchSolid);
export default ForwardRef;
