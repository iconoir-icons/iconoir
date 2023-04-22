import * as React from "react";
function SvgFloppyDiskArrowIn(
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
        d="M3 7.5V5a2 2 0 012-2h11.172a2 2 0 011.414.586l2.828 2.828A2 2 0 0121 7.828V19a2 2 0 01-2 2H5a2 2 0 01-2-2v-2.5M6 21v-4"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18 21v-7.4a.6.6 0 00-.6-.6H15M16 3v5.4a.6.6 0 01-.6.6h-1.9M8 3v3M1 12h11m0 0L9 9m3 3l-3 3"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
const ForwardRef = React.forwardRef(SvgFloppyDiskArrowIn);
export default ForwardRef;
