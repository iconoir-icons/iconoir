import * as React from "react";
import { IconoirContext } from "./IconoirContext";

function SvgSecureWindow(
  passedProps: React.SVGProps<SVGSVGElement>,
  svgRef?: React.Ref<SVGSVGElement>
) {
  const context = React.useContext(IconoirContext);
  const props = { ...context, ...passedProps };
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
        d="M13 21H4a2 2 0 01-2-2V5a2 2 0 012-2h16a2 2 0 012 2v7"
        stroke="currentColor"
        strokeLinecap="round"
      />
      <path
        d="M2 7h20M5 5.01l.01-.011M8 5.01l.01-.011M11 5.01l.01-.011M18.992 14.125l2.556.649c.266.068.453.31.445.584C21.821 21.116 18.5 22 18.5 22s-3.321-.884-3.493-6.642a.588.588 0 01.445-.584l2.556-.649c.323-.082.661-.082.984 0z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const ForwardRef = React.forwardRef(SvgSecureWindow);
export default ForwardRef;
