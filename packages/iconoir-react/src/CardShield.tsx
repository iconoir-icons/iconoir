import * as React from "react";
import { IconoirContext } from "./IconoirContext";
function SvgCardShield(
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
      strokeWidth={1.5}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      color="currentColor"
      ref={svgRef}
      {...props}
    >
      <path
        d="M22 9V7a2 2 0 00-2-2H4a2 2 0 00-2 2v10a2 2 0 002 2h8M22 9H6m16 0v2"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18.992 14.125l2.556.649c.266.068.453.31.445.584C21.821 21.116 18.5 22 18.5 22s-3.321-.884-3.493-6.642a.588.588 0 01.445-.584l2.556-.649c.323-.082.661-.082.984 0z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
const ForwardRef = React.forwardRef(SvgCardShield);
export default ForwardRef;
