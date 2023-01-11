import * as React from "react";
import { IconoirContext } from "./IconoirContext";
function SvgMediaImageFolder(
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
        d="M22 12.6v7.8a.6.6 0 01-.6.6h-7.8a.6.6 0 01-.6-.6v-7.8a.6.6 0 01.6-.6h7.8a.6.6 0 01.6.6zM19.5 14.51l.01-.011"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13 18.2l3.5-1.2 5.5 2M2 10V3.6a.6.6 0 01.6-.6h6.178a.6.6 0 01.39.144l3.164 2.712a.6.6 0 00.39.144H21.4a.6.6 0 01.6.6V9M2 10v8.4a.6.6 0 00.6.6H10m-8-9h8"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
const ForwardRef = React.forwardRef(SvgMediaImageFolder);
export default ForwardRef;
