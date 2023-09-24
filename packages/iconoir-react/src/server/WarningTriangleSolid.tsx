import * as React from "react";
function SvgWarningTriangleSolid(
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
        d="M9.616 3.642c1.058-1.839 3.71-1.839 4.768 0l8.043 13.988c1.054 1.833-.27 4.12-2.384 4.12H3.957c-2.115 0-3.438-2.287-2.384-4.12L9.616 3.642zM12 8.25a.75.75 0 01.75.75v4a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm.568 9.25a.75.75 0 00-1.115-1.003l-.01.011a.75.75 0 001.114 1.004l.01-.011z"
        fill="currentColor"
      />
    </svg>
  );
}
const ForwardRef = React.forwardRef(SvgWarningTriangleSolid);
export default ForwardRef;
