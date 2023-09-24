import * as React from "react";
function SvgEthereumCircleSolid(
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
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 1.25C6.063 1.25 1.25 6.063 1.25 12S6.063 22.75 12 22.75 22.75 17.937 22.75 12 17.937 1.25 12 1.25zm.61 3.314a.75.75 0 00-1.22 0l-5 7a.75.75 0 000 .872l5 7a.75.75 0 001.22 0l5-7a.75.75 0 000-.872l-5-7zM12 17.71l-3.287-4.603 3.14.628c.097.02.197.02.294 0l3.14-.628L12 17.71zm.75-5.625l2.966-.593L12.75 7.34v4.745zm-1.5 0V7.34l-2.966 4.152 2.966.593z"
        fill="currentColor"
      />
    </svg>
  );
}
const ForwardRef = React.forwardRef(SvgEthereumCircleSolid);
export default ForwardRef;
