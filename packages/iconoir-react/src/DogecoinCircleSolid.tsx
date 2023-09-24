import * as React from "react";
import { IconoirContext } from "./IconoirContext";
function SvgDogecoinCircleSolid(
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
        d="M1.25 12C1.25 6.063 6.063 1.25 12 1.25S22.75 6.063 22.75 12 17.937 22.75 12 22.75 1.25 17.937 1.25 12zm15.348-3.268c.426.845.652 1.919.652 3.268 0 1.35-.226 2.424-.652 3.268a4.102 4.102 0 01-1.761 1.814c-1.341.716-2.988.692-4.184.675l-.065-.001a1.356 1.356 0 01-1.338-1.354V12.75H8a.75.75 0 010-1.5h1.25V7.598c0-.747.603-1.343 1.338-1.354h.065c1.196-.018 2.843-.042 4.184.674.71.38 1.329.959 1.76 1.814zM10.75 11.25V7.742c1.242-.015 2.453.004 3.38.5.454.241.844.602 1.129 1.167.29.576.491 1.401.491 2.591 0 1.19-.2 2.015-.491 2.592a2.603 2.603 0 01-1.129 1.167c-.927.495-2.138.515-3.38.5V12.75H12a.75.75 0 000-1.5h-1.25z"
        fill="currentColor"
      />
    </svg>
  );
}
const ForwardRef = React.forwardRef(SvgDogecoinCircleSolid);
export default ForwardRef;
