import * as React from "react";
function SvgWindowLock(
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
        d="M14 21H4a2 2 0 01-2-2V5a2 2 0 012-2h16a2 2 0 012 2v8"
        stroke="currentColor"
        strokeLinecap="round"
      />
      <path
        d="M2 7h20M5 5.01l.01-.011M8 5.01l.01-.011M11 5.01l.01-.011M21.167 18.5h.233a.6.6 0 01.6.6v2.3a.6.6 0 01-.6.6h-3.8a.6.6 0 01-.6-.6v-2.3a.6.6 0 01.6-.6h.233m3.334 0v-1.75c0-.583-.334-1.75-1.667-1.75s-1.667 1.167-1.667 1.75v1.75m3.334 0h-3.334"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
const ForwardRef = React.forwardRef(SvgWindowLock);
export default ForwardRef;
