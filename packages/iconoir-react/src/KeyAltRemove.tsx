import * as React from "react";
import { IconoirContext } from "./IconoirContext";

function SvgKeyAltRemove(
  passedProps: React.SVGProps<SVGSVGElement>,
  svgRef?: React.Ref<SVGSVGElement>
) {
  const context = React.useContext(IconoirContext);
  const props = { ...context, ...passedProps };
  return (
    <svg
      width="1.5em"
      height="1.5em"
      strokeWidth={1.5}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      color="currentColor"
      ref={svgRef}
      {...props}
    >
      <path
        d="M15.87 20.121L17.993 18m2.121-2.121L17.993 18m0 0l-2.122-2.121M17.992 18l2.121 2.121M12.412 10.343a4 4 0 105.657-5.657 4 4 0 00-5.657 5.657zm0 0l-8.485 8.485 2.121 2.122M6.755 16l2.122 2.121"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const ForwardRef = React.forwardRef(SvgKeyAltRemove);
export default ForwardRef;
