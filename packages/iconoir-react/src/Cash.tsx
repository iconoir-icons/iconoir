import * as React from "react";
import { IconoirContext } from "./IconoirContext";
function SvgCash(
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
      strokeWidth={1.5}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      color="currentColor"
      ref={svgRef}
      {...props}
    >
      <path
        d="M14 5h7.4a.6.6 0 01.6.6v12.8a.6.6 0 01-.6.6H14m0-14v14m0-14h-4m4 14h-4m0 0H2.6a.6.6 0 01-.6-.6V5.6a.6.6 0 01.6-.6H10m0 14V5"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7 9.849c0-.414-.413-.699-.75-.457A2.996 2.996 0 005 11.829c0 1.004.493 1.893 1.25 2.438.337.242.75-.043.75-.457V9.85zM17 9.849c0-.414.413-.699.75-.457A2.996 2.996 0 0119 11.829a2.996 2.996 0 01-1.25 2.438c-.337.242-.75-.043-.75-.457V9.85z"
        fill="currentColor"
      />
    </svg>
  );
}
const ForwardRef = React.forwardRef(SvgCash);
export default ForwardRef;
