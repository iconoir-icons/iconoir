import * as React from "react";
import { IconoirContext } from "./IconoirContext";

function SvgAlbumList(
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
        d="M2 17.4V2.6a.6.6 0 01.6-.6h14.8a.6.6 0 01.6.6v14.8a.6.6 0 01-.6.6H2.6a.6.6 0 01-.6-.6z"
        stroke="currentColor"
      />
      <path
        d="M8 22h13.4a.6.6 0 00.6-.6V8M11 12.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm0 0V6.6a.6.6 0 01.6-.6H13"
        stroke="currentColor"
        strokeLinecap="round"
      />
    </svg>
  );
}

const ForwardRef = React.forwardRef(SvgAlbumList);
export default ForwardRef;
