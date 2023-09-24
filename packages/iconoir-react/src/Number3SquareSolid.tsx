import * as React from "react";
import { IconoirContext } from "./IconoirContext";
function SvgNumber3SquareSolid(
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
        d="M2.25 3.6c0-.746.604-1.35 1.35-1.35h16.8c.746 0 1.35.604 1.35 1.35v16.8a1.35 1.35 0 01-1.35 1.35H3.6a1.35 1.35 0 01-1.35-1.35V3.6zM12 8.75c1.131 0 1.75.707 1.75 1.25 0 .42-.117.722-.288.911-.16.177-.442.339-.962.339a.75.75 0 000 1.5c.52 0 .802.162.962.339.17.19.288.492.288.911 0 .543-.619 1.25-1.75 1.25s-1.75-.707-1.75-1.25a.75.75 0 00-1.5 0c0 1.666 1.62 2.75 3.25 2.75s3.25-1.084 3.25-2.75c0-.685-.193-1.383-.676-1.917a2.452 2.452 0 00-.079-.083 2.36 2.36 0 00.079-.083c.483-.534.676-1.232.676-1.917 0-1.666-1.62-2.75-3.25-2.75S8.75 8.334 8.75 10a.75.75 0 001.5 0c0-.543.619-1.25 1.75-1.25z"
        fill="currentColor"
      />
    </svg>
  );
}
const ForwardRef = React.forwardRef(SvgNumber3SquareSolid);
export default ForwardRef;
