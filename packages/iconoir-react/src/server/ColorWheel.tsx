import * as React from "react";
function SvgColorWheel(
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
        d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 16a4 4 0 110-8 4 4 0 010 8zM12 2v6M12 16v6M2 12h6M16 12h6M4.929 4.929L9.172 9.17M14.828 14.829l4.243 4.242M4.929 19.071l4.243-4.242M14.828 9.171l4.243-4.242"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
const ForwardRef = React.forwardRef(SvgColorWheel);
export default ForwardRef;
