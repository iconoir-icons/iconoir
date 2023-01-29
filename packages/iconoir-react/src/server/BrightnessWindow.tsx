import * as React from "react";
function SvgBrightnessWindow(
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
        d="M12 21H4a2 2 0 01-2-2V5a2 2 0 012-2h16a2 2 0 012 2v7"
        stroke="currentColor"
        strokeLinecap="round"
      />
      <path
        d="M2 7h20M5 5.01l.01-.011M8 5.01l.01-.011M11 5.01l.01-.011"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18 14l1.225 1.044 1.603.128.128 1.603L22 18l-1.044 1.225-.128 1.603-1.603.128L18 22l-1.225-1.044-1.603-.128-.128-1.603L14 18l1.044-1.225.128-1.603 1.603-.128L18 14z"
        stroke="currentColor"
      />
      <path
        d="M16.775 20.956L18 22v-8l-1.225 1.044-1.603.128-.128 1.603L14 18l1.044 1.225.128 1.603 1.603.128z"
        fill="currentColor"
      />
    </svg>
  );
}
const ForwardRef = React.forwardRef(SvgBrightnessWindow);
export default ForwardRef;
