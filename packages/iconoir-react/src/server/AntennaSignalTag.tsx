import * as React from "react";
function SvgAntennaSignalTag(
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
        d="M2 15V9a6 6 0 016-6h8a6 6 0 016 6v6a6 6 0 01-6 6H8a6 6 0 01-6-6z"
        stroke="currentColor"
      />
      <path
        d="M15 9s1 1.125 1 3-1 3-1 3M12 12.01l.01-.011M17 7s2 1.786 2 5-2 5-2 5M9 9s-1 1.125-1 3 1 3 1 3M7 7s-2 1.786-2 5 2 5 2 5"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
const ForwardRef = React.forwardRef(SvgAntennaSignalTag);
export default ForwardRef;
