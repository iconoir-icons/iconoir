import * as React from "react";
function SvgMultiMacOsWindow(
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
        d="M7 19v-8a2 2 0 012-2h11a2 2 0 012 2v8a2 2 0 01-2 2H9a2 2 0 01-2-2z"
        stroke="currentColor"
      />
      <path
        d="M10 12.01l.01-.011M12 12.01l.01-.011M14 12.01l.01-.011"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.5 16H4a2 2 0 01-2-2V6a2 2 0 012-2h11a2 2 0 012 2v3"
        stroke="currentColor"
      />
      <path
        d="M5 7.01l.01-.011M7 7.01l.01-.011M9 7.01l.01-.011"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
const ForwardRef = React.forwardRef(SvgMultiMacOsWindow);
export default ForwardRef;
