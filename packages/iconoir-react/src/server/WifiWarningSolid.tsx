import * as React from "react";
function SvgWifiWarningSolid(
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
        d="M1.756 6.94c3.192-2.444 6.612-3.69 10.243-3.69 3.632 0 7.051 1.246 10.244 3.69l.014.01.013.011c.552.465.653 1.282.175 1.847L12.99 19.981a1.296 1.296 0 01-1.981 0L1.543 8.795l-.011-.014c-.44-.572-.364-1.392.224-1.842zM12 7.25a.75.75 0 01.75.75v2a.75.75 0 01-1.5 0V8a.75.75 0 01.75-.75zm.568 7.25a.75.75 0 00-1.115-1.003l-.01.011a.75.75 0 001.114 1.004l.01-.011z"
        fill="currentColor"
      />
    </svg>
  );
}
const ForwardRef = React.forwardRef(SvgWifiWarningSolid);
export default ForwardRef;
