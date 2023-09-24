import * as React from "react";
import { IconoirContext } from "./IconoirContext";
function SvgDatabaseTagSolid(
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
        d="M1.25 9A6.75 6.75 0 018 2.25h8A6.75 6.75 0 0122.75 9v6A6.75 6.75 0 0116 21.75H8A6.75 6.75 0 011.25 15V9zm16.08-.096c-.25-.14-.588-.154-.973-.154H14.25v2.5h2.128c.377 0 .706-.017.952-.154.158-.089.42-.302.42-1.096s-.262-1.007-.42-1.096zM18.582 12c.423-.45.668-1.112.668-2 0-1.206-.452-1.993-1.187-2.404-.62-.348-1.325-.346-1.67-.346H13.5a.75.75 0 00-.75.75v8c0 .414.336.75.75.75h2.894c.344 0 1.049.002 1.669-.346.735-.411 1.187-1.198 1.187-2.404 0-.888-.245-1.549-.668-2zm-2.203.75H14.25v2.5h2.107c.385 0 .723-.014.973-.154.158-.089.42-.302.42-1.096s-.262-1.007-.42-1.095c-.245-.138-.575-.154-.951-.155zm-8.022-4c.385 0 .723.014.973.154.158.089.42.302.42 1.096v4c0 .794-.262 1.007-.42 1.096-.25.14-.588.154-.973.154H6.25v-6.5h2.107zM11.25 10c0-1.206-.452-1.993-1.187-2.404-.62-.348-1.325-.346-1.67-.346H5.5a.75.75 0 00-.75.75v8c0 .414.336.75.75.75h2.894c.344 0 1.049.002 1.669-.346.735-.411 1.187-1.198 1.187-2.404v-4z"
        fill="currentColor"
      />
    </svg>
  );
}
const ForwardRef = React.forwardRef(SvgDatabaseTagSolid);
export default ForwardRef;
