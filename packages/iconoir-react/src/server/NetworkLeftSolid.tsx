import * as React from "react";
function SvgNetworkLeftSolid(
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
      <rect
        x={2}
        y={21}
        width={7}
        height={5}
        rx={0.6}
        transform="rotate(-90 2 21)"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth={1.5}
      />
      <rect
        x={17}
        y={15.5}
        width={7}
        height={5}
        rx={0.6}
        transform="rotate(-90 17 15.5)"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth={1.5}
      />
      <rect
        x={2}
        y={10}
        width={7}
        height={5}
        rx={0.6}
        transform="rotate(-90 2 10)"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth={1.5}
      />
      <path
        d="M7 17.5h3.5a2 2 0 002-2v-7a2 2 0 00-2-2H7M12.5 12H17"
        stroke="currentColor"
      />
    </svg>
  );
}
const ForwardRef = React.forwardRef(SvgNetworkLeftSolid);
export default ForwardRef;
