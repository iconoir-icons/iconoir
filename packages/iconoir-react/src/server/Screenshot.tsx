import * as React from "react";
function SvgScreenshot(
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
      <path
        d="M10 21.4v-7.006a.6.6 0 01.6-.6h1.173a.6.6 0 00.504-.275l1.446-2.244a.6.6 0 01.504-.275h3.546a.6.6 0 01.504.275l1.446 2.244a.6.6 0 00.504.275H21.4a.6.6 0 01.6.6V21.4a.6.6 0 01-.6.6H10.6a.6.6 0 01-.6-.6z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16 19a2 2 0 100-4 2 2 0 000 4zM3 18v3h2.5M3 9.5v5M3 6V3h3M9.5 3h5M18 3h3v2.5M21 10V8.5"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
const ForwardRef = React.forwardRef(SvgScreenshot);
export default ForwardRef;
