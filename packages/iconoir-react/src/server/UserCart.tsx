import * as React from "react";
function SvgUserCart(
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
        d="M22 12.5l-.833 2.5m0 0L20 18.5h-4.5l-1-3.5h6.667zM16.5 20.51l.01-.011M19.5 20.51l.01-.011M9 11a4 4 0 100-8 4 4 0 000 8zM2 18a7 7 0 0111.33-5.5"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
const ForwardRef = React.forwardRef(SvgUserCart);
export default ForwardRef;
