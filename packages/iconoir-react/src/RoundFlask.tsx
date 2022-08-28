import * as React from "react";
import { IconoirContext } from "./IconoirContext";

function SvgRoundFlask(
  passedProps: React.SVGProps<SVGSVGElement>,
  svgRef?: React.Ref<SVGSVGElement>
) {
  const context = React.useContext(IconoirContext);
  const props = { ...context, ...passedProps };
  return (
    <svg
      width="1.5em"
      strokeWidth={1.5}
      height="1.5em"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      color="currentColor"
      ref={svgRef}
      {...props}
    >
      <path d="M19 15H5" stroke="currentColor" strokeLinejoin="round" />
      <path
        d="M16 4H8M15 4.5v4.253c0 .763.445 1.445 1.078 1.871C18.287 12.11 20 14.617 20 17.462c0 .812-.114 1.596-.325 2.338-.215.75-.945 1.2-1.726 1.2H6.051c-.78 0-1.511-.45-1.726-1.2A8.505 8.505 0 014 17.462c0-2.845 1.713-5.353 3.922-6.838C8.555 10.198 9 9.516 9 8.754V4.5M13 7.01l.01-.011M11 2.01l.01-.011"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const ForwardRef = React.forwardRef(SvgRoundFlask);
export default ForwardRef;
