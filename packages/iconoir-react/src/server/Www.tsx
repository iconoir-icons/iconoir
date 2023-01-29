import * as React from "react";
function SvgWww(
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
        d="M3.338 17A9.996 9.996 0 0012 22a9.996 9.996 0 008.662-5M3.338 7A9.996 9.996 0 0112 2a9.996 9.996 0 018.662 5M13 21.95s1.408-1.853 2.295-4.95M13 2.05S14.408 3.902 15.295 7M11 21.95S9.592 20.098 8.705 17M11 2.05S9.592 3.902 8.705 7M9 10l1.5 5 1.5-5 1.5 5 1.5-5M1 10l1.5 5L4 10l1.5 5L7 10M17 10l1.5 5 1.5-5 1.5 5 1.5-5"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
const ForwardRef = React.forwardRef(SvgWww);
export default ForwardRef;
