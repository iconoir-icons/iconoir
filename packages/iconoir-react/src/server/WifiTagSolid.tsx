import * as React from "react";
function SvgWifiTagSolid(
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
        d="M8 2.25A6.75 6.75 0 001.25 9v6A6.75 6.75 0 008 21.75h8A6.75 6.75 0 0022.75 15V9A6.75 6.75 0 0016 2.25H8zm4.568 13a.75.75 0 00-1.115-1.003l-.01.011a.75.75 0 001.114 1.004l.01-.011zm3.856-3.52c-2.2-2.64-6.648-2.64-8.848 0a.75.75 0 11-1.152-.96c2.8-3.36 8.352-3.36 11.152 0a.75.75 0 11-1.152.96zM9.6 13.7a3 3 0 014.8 0 .75.75 0 101.2-.9c-1.8-2.4-5.4-2.4-7.2 0a.75.75 0 001.2.9z"
        fill="currentColor"
      />
    </svg>
  );
}
const ForwardRef = React.forwardRef(SvgWifiTagSolid);
export default ForwardRef;
