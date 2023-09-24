import * as React from "react";
function SvgAlignLeftBoxSolid(
  props: React.SVGProps<SVGSVGElement>,
  svgRef?: React.Ref<SVGSVGElement>
) {
  return (
    <svg
      width="1.5em"
      height="1.5em"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      color="currentColor"
      ref={svgRef}
      {...props}
    >
      <path
        d="M16.005 3.995l-.011.01M20.005 3.995l-.011.01M20.005 7.995l-.011.01M20.005 11.995l-.011.01M20.005 15.995l-.011.01M20.005 19.995l-.011.01M16.005 19.995l-.011.01"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.005 3.995h-8v16h8v-16z"
        fill="currentColor"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
const ForwardRef = React.forwardRef(SvgAlignLeftBoxSolid);
export default ForwardRef;
