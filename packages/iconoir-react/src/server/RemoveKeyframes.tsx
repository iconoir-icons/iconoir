import * as React from "react";
function SvgRemoveKeyframes(
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
        d="M2 12h6M6.25 6l.245-.28a2 2 0 013.01 0l4.343 4.963a2 2 0 010 2.634L9.505 18.28a2 2 0 01-3.01 0L6.25 18"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13 19l4.884-5.698a2 2 0 000-2.604L13 5"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17 19l4.884-5.698a2 2 0 000-2.604L17 5"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
const ForwardRef = React.forwardRef(SvgRemoveKeyframes);
export default ForwardRef;
