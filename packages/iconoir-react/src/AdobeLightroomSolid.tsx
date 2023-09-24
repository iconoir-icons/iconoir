import * as React from "react";
import { IconoirContext } from "./IconoirContext";
function SvgAdobeLightroomSolid(
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
        d="M21.75 17A4.75 4.75 0 0117 21.75H7A4.75 4.75 0 012.25 17V7A4.75 4.75 0 017 2.25h10A4.75 4.75 0 0121.75 7v10zM7 16.75a.75.75 0 01-.75-.75V8a.75.75 0 011.5 0v7.25H11a.75.75 0 010 1.5H7zm6.25-.75a.75.75 0 001.5 0v-2.998l.003-.045a1.968 1.968 0 01.265-.82c.235-.392.736-.887 1.982-.887a.75.75 0 000-1.5c-.973 0-1.713.232-2.268.586a.75.75 0 00-1.482.164V16z"
        fill="currentColor"
      />
    </svg>
  );
}
const ForwardRef = React.forwardRef(SvgAdobeLightroomSolid);
export default ForwardRef;
