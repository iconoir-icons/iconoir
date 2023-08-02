import * as React from "react";
import { IconoirContext } from "./IconoirContext";
function SvgNumber2Square(
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
        d="M3 20.4V3.6a.6.6 0 01.6-.6h16.8a.6.6 0 01.6.6v16.8a.6.6 0 01-.6.6H3.6a.6.6 0 01-.6-.6z"
        stroke="currentColor"
      />
      <path
        d="M9.5 10.8v-.4c0-1.325 1.033-2.4 2.308-2.4 1.274 0 2.307 1.075 2.307 2.4 0 .457-.122.884-.336 1.248C12.73 13.44 9.5 16 9.5 16h5"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
const ForwardRef = React.forwardRef(SvgNumber2Square);
export default ForwardRef;
