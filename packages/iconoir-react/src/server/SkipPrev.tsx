import * as React from "react";
function SvgSkipPrev(
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
        d="M6 7v10M17.028 5.267a.6.6 0 01.972.471v12.524a.6.6 0 01-.972.47l-7.931-6.261a.6.6 0 010-.942l7.931-6.262z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
const ForwardRef = React.forwardRef(SvgSkipPrev);
export default ForwardRef;
