import * as React from "react";
function SvgTrain(
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
        d="M9.609 7h4.782A2.609 2.609 0 0117 9.609a.391.391 0 01-.391.391H7.39A.391.391 0 017 9.609 2.609 2.609 0 019.609 7z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9 3h6a6 6 0 016 6v4a6 6 0 01-6 6H9a6 6 0 01-6-6V9a6 6 0 016-6zM16 15.01l.01-.011M8 15.01l.01-.011"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.5 19l-2 2.5M13.5 19l2 2.5M16.5 19l2 2.5M7.5 19l-2 2.5"
        stroke="currentColor"
        strokeLinecap="round"
      />
    </svg>
  );
}
const ForwardRef = React.forwardRef(SvgTrain);
export default ForwardRef;
