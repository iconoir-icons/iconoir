import * as React from "react";
import { IconoirContext } from "./IconoirContext";

function SvgSoap(
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
        d="M7 11a4 4 0 014-4h2a4 4 0 014 4v9.4a.6.6 0 01-.6.6H7.6a.6.6 0 01-.6-.6V11zM7 13h10M12 7V3m0 0H9m3 0h1"
        stroke="currentColor"
        strokeLinecap="round"
      />
    </svg>
  );
}

const ForwardRef = React.forwardRef(SvgSoap);
export default ForwardRef;
