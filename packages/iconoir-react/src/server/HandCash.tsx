import * as React from "react";
function SvgHandCash(
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
        d="M2 11l2.807-3.157A4 4 0 017.797 6.5H8M2 19.5h5.5l4-3s.81-.547 2-1.5c2.5-2 0-5.166-2.5-3.5C8.964 12.857 7 14 7 14"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8 13.5V7a2 2 0 012-2h10a2 2 0 012 2v6a2 2 0 01-2 2h-6.5"
        stroke="currentColor"
      />
      <path
        d="M15 12a2 2 0 110-4 2 2 0 010 4zM19.5 10.01l.01-.011M10.5 10.01l.01-.011"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
const ForwardRef = React.forwardRef(SvgHandCash);
export default ForwardRef;
