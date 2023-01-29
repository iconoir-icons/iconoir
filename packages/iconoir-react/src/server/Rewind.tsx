import * as React from "react";
function SvgRewind(
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
        d="M21.044 5.704a.6.6 0 01.956.483v11.626a.6.6 0 01-.956.483l-7.889-5.813a.6.6 0 010-.966l7.89-5.813zM10.044 5.704a.6.6 0 01.956.483v11.626a.6.6 0 01-.956.483l-7.888-5.813a.6.6 0 010-.966l7.888-5.813z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
const ForwardRef = React.forwardRef(SvgRewind);
export default ForwardRef;
