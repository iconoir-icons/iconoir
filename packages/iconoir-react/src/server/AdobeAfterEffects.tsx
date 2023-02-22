import * as React from "react";
function SvgAdobeAfterEffects(
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
        d="M21 7v10a4 4 0 01-4 4H7a4 4 0 01-4-4V7a4 4 0 014-4h10a4 4 0 014 4z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14 13v-1a2 2 0 012-2v0a2 2 0 012 2v1h-4zm0 0v1a2 2 0 002 2h1.5M6 16l1.125-3M12 16l-1.125-3m-3.75 0L9 8l1.875 5m-3.75 0h3.75"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
const ForwardRef = React.forwardRef(SvgAdobeAfterEffects);
export default ForwardRef;
