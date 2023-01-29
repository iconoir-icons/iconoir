import * as React from "react";
function SvgCornerTopRight(
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
        d="M20.01 16.01l-.01-.011M20.01 20.01l-.01-.011M16.01 20.01l-.01-.011M12.01 20.01l-.01-.011M8.01 20.01L8 19.999M4.01 20.01L4 19.999M4.01 16.01L4 15.999M4.01 12.01L4 11.999M4.01 8.01L4 7.999M4.01 4.01L4 3.999M8.01 4.01L8 3.999M20.01 12V4h-8v8h8z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
const ForwardRef = React.forwardRef(SvgCornerTopRight);
export default ForwardRef;
