import * as React from "react";
function SvgNetworkLeft(
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
      <rect
        x={2}
        y={21}
        width={7}
        height={5}
        rx={0.6}
        transform="rotate(-90 2 21)"
        stroke="currentColor"
      />
      <rect
        x={17}
        y={15.5}
        width={7}
        height={5}
        rx={0.6}
        transform="rotate(-90 17 15.5)"
        stroke="currentColor"
      />
      <rect
        x={2}
        y={10}
        width={7}
        height={5}
        rx={0.6}
        transform="rotate(-90 2 10)"
        stroke="currentColor"
      />
      <path
        d="M7 17.5h3.5a2 2 0 002-2v-7a2 2 0 00-2-2H7M12.5 12H17"
        stroke="currentColor"
      />
    </svg>
  );
}
const ForwardRef = React.forwardRef(SvgNetworkLeft);
export default ForwardRef;
