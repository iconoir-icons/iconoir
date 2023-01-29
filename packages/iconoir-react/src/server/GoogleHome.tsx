import * as React from "react";
function SvgGoogleHome(
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
        d="M17.708 17A9 9 0 104.291 5a9 9 0 0013.417 12zm0 0H19.5a2.5 2.5 0 012.5 2.5v0a2.5 2.5 0 01-2.5 2.5H17"
        stroke="currentColor"
        strokeLinecap="round"
      />
      <path
        d="M11 11.01l.01-.011M8 11.01l.01-.011M14 11.01l.01-.011"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
const ForwardRef = React.forwardRef(SvgGoogleHome);
export default ForwardRef;
