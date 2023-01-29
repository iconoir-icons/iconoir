import * as React from "react";
function SvgCornerBottomRight(
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
        d="M20.01 8l-.01.011M20.01 4l-.01.011M16.01 4l-.01.011M12.01 4l-.01.011M8.01 4L8 4.011M4.01 4L4 4.011M4.01 8L4 8.011M4.01 12l-.01.011M4.01 16l-.01.011M4.01 20l-.01.011M8.01 20l-.01.011M20.01 12.01v8h-8v-8h8z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
const ForwardRef = React.forwardRef(SvgCornerBottomRight);
export default ForwardRef;
