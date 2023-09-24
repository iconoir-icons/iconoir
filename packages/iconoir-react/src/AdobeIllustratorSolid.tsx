import * as React from "react";
import { IconoirContext } from "./IconoirContext";
function SvgAdobeIllustratorSolid(
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
        d="M17 21.75A4.75 4.75 0 0021.75 17V7A4.75 4.75 0 0017 2.25H7A4.75 4.75 0 002.25 7v10A4.75 4.75 0 007 21.75h10zM15.25 16a.75.75 0 001.5 0v-4a.75.75 0 00-1.5 0v4zM16 9.76a.75.75 0 01-.75-.75V9a.75.75 0 011.5 0v.01a.75.75 0 01-.75.75zm-9.702 5.976a.75.75 0 101.404.527l.943-2.513h2.71l.943 2.513a.75.75 0 101.404-.527l-3-8a.75.75 0 00-1.404 0l-3 8zm3.702-5.6l.793 2.114H9.207L10 10.136z"
        fill="currentColor"
      />
    </svg>
  );
}
const ForwardRef = React.forwardRef(SvgAdobeIllustratorSolid);
export default ForwardRef;
