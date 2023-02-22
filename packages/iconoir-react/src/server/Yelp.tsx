import * as React from "react";
function SvgYelp(
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
        d="M11.5 11l-.458-8.24a.6.6 0 00-.771-.541L6.814 3.256a.6.6 0 00-.311.93L11.5 11zM14 12.5l4.57-.83a.6.6 0 00.38-.94l-1.445-2.023a.6.6 0 00-.987.016L14 12.5zM14.5 16l2.066 4.132a.6.6 0 001.017.091l1.835-2.446a.6.6 0 00-.373-.95L14.5 16zM11.5 16.5l-3.341 3.341a.6.6 0 00.213.986l2.317.869a.6.6 0 00.811-.562V16.5zM9.5 14l-4.132-2.066a.6.6 0 00-.868.537v2.643a.6.6 0 00.823.557L9.5 14z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
const ForwardRef = React.forwardRef(SvgYelp);
export default ForwardRef;
