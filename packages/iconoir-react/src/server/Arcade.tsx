import * as React from "react";
function SvgArcade(
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
        d="M11 8.5L9.8 9l-7.448 3.386a.6.6 0 00-.352.546v.136a.6.6 0 00.352.546l8.82 4.01a2 2 0 001.656 0l8.82-4.01a.6.6 0 00.352-.546v-.136a.6.6 0 00-.352-.546L14.2 9 13 8.5"
        stroke="currentColor"
      />
      <path
        d="M22 13v4.112a.6.6 0 01-.354.547l-8.825 3.972a2 2 0 01-1.642 0l-8.825-3.972A.6.6 0 012 17.112V13"
        stroke="currentColor"
      />
      <path
        d="M12 8a3 3 0 110-6 3 3 0 010 6z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M11 8v5a1 1 0 001 1v0a1 1 0 001-1V8" stroke="currentColor" />
      <path
        d="M16 13h1"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
const ForwardRef = React.forwardRef(SvgArcade);
export default ForwardRef;
