import * as React from "react";
function SvgReportsSolid(
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
      <rect x={16} y={3} width={5} height={18} rx={2} fill="currentColor" />
      <rect x={9.5} y={9} width={5} height={12} rx={2} fill="currentColor" />
      <rect x={3} y={16} width={5} height={5} rx={2} fill="currentColor" />
    </svg>
  );
}
const ForwardRef = React.forwardRef(SvgReportsSolid);
export default ForwardRef;
