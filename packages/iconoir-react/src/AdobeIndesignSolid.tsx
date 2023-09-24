import * as React from "react";
import { IconoirContext } from "./IconoirContext";
function SvgAdobeIndesignSolid(
  passedProps: React.SVGProps<SVGSVGElement>,
  svgRef?: React.Ref<SVGSVGElement>
) {
  const context = React.useContext(IconoirContext);
  const props = {
    ...context,
    ...passedProps,
  };
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
        d="M21.75 17A4.75 4.75 0 0117 21.75H7A4.75 4.75 0 012.25 17V7A4.75 4.75 0 017 2.25h10A4.75 4.75 0 0121.75 7v10zM8.5 16.75a.75.75 0 01-.75-.75V8a.75.75 0 011.5 0v8a.75.75 0 01-.75.75zm5-4h1.25v2.5H13.5a1.25 1.25 0 110-2.5zm0 4a2.75 2.75 0 110-5.5h1.25V9a.75.75 0 011.5 0v6.4a1.35 1.35 0 01-1.35 1.35h-1.4z"
        fill="currentColor"
      />
    </svg>
  );
}
const ForwardRef = React.forwardRef(SvgAdobeIndesignSolid);
export default ForwardRef;
