import * as React from "react";
function SvgVideoCameraOff(
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
        d="M6.5 7H3.6a.6.6 0 00-.6.6v8.8a.6.6 0 00.6.6h10.8a.6.6 0 00.6-.6V15m-3.5-8h2.9a.6.6 0 01.6.6v3.119a.6.6 0 00.984.46l4.032-3.359a.6.6 0 01.984.461V15.5M3 3l18 18"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
const ForwardRef = React.forwardRef(SvgVideoCameraOff);
export default ForwardRef;
