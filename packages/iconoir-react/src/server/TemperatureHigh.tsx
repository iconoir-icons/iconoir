import * as React from "react";
function SvgTemperatureHigh(
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
        d="M6 12a5 5 0 106 0M6 12V3h6v9M12 3h2M12 6h2M12 9h2M19 7a2 2 0 100-4 2 2 0 000 4z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9 14a2 2 0 100 4 2 2 0 000-4zm0 0V6"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
const ForwardRef = React.forwardRef(SvgTemperatureHigh);
export default ForwardRef;
