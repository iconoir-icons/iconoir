import * as React from "react";
import { IconoirContext } from "./IconoirContext";

function SvgLinux(
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
        d="M2.5 20c1 0 2-.8 2-2v-7c0-3.5 3.1-7 7.5-7M21.5 20c-1 0-2-.8-2-2v-7c0-3.5-3.1-7-7.5-7"
        stroke="currentColor"
        strokeLinecap="round"
      />
      <path
        d="M12 19c2.761 0 5-1.12 5-2.5S14.761 14 12 14s-5 1.12-5 2.5S9.239 19 12 19z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.75 15c-.463-.635-.75-1.52-.75-2.5C7 10.567 8.12 9 9.5 9s2.5 1.567 2.5 3.5c0 .455-.062.89-.175 1.29M16.25 15c.463-.635.75-1.52.75-2.5 0-1.933-1.12-3.5-2.5-3.5S12 10.567 12 12.5c0 .455.062.89.175 1.29M9.5 12v2M14.5 12v2"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const ForwardRef = React.forwardRef(SvgLinux);
export default ForwardRef;
