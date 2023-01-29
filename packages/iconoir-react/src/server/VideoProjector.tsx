import * as React from "react";
function SvgVideoProjector(
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
        d="M4 19h2M18 19h2"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2 16.4V7.6a.6.6 0 01.6-.6h18.8a.6.6 0 01.6.6v8.8a.6.6 0 01-.6.6H2.6a.6.6 0 01-.6-.6z"
        stroke="currentColor"
      />
      <path
        d="M5 10.01l.01-.011M8 10.01l.01-.011M11 10.01l.01-.011M5 14.01l.01-.011M8 14.01l.01-.011M11 14.01l.01-.011M17 14a2 2 0 100-4 2 2 0 000 4z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
const ForwardRef = React.forwardRef(SvgVideoProjector);
export default ForwardRef;
