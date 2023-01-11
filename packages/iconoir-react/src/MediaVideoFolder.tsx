import * as React from "react";
import { IconoirContext } from "./IconoirContext";
function SvgMediaVideoFolder(
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
        d="M22 12.6v7.8a.6.6 0 01-.6.6h-7.8a.6.6 0 01-.6-.6v-7.8a.6.6 0 01.6-.6h7.8a.6.6 0 01.6.6z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16.918 14.574a.6.6 0 00-.918.508v2.835a.6.6 0 00.918.51l2.268-1.418a.6.6 0 000-1.018l-2.268-1.417zM2 10V3.6a.6.6 0 01.6-.6h6.178a.6.6 0 01.39.144l3.164 2.712a.6.6 0 00.39.144H21.4a.6.6 0 01.6.6V9M2 10v8.4a.6.6 0 00.6.6H10m-8-9h8"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
const ForwardRef = React.forwardRef(SvgMediaVideoFolder);
export default ForwardRef;
