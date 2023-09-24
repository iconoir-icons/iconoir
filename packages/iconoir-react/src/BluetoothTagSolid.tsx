import * as React from "react";
import { IconoirContext } from "./IconoirContext";
function SvgBluetoothTagSolid(
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
        d="M8 2.25A6.75 6.75 0 001.25 9v6A6.75 6.75 0 008 21.75h8A6.75 6.75 0 0022.75 15V9A6.75 6.75 0 0016 2.25H8zm4.4 3.233A.75.75 0 0011.107 6v4.407L9.486 9.029a.75.75 0 10-.972 1.143L10.666 12l-2.152 1.829a.75.75 0 10.972 1.143l1.621-1.379V18a.75.75 0 001.293.517l3.143-3.3a.75.75 0 00-.057-1.088L12.982 12l2.504-2.129a.75.75 0 00.057-1.088l-3.143-3.3zm1.51 9.274l-1.303-1.107v2.475l1.303-1.367zm-1.303-6.882v2.475l1.303-1.107-1.303-1.368z"
        fill="currentColor"
      />
    </svg>
  );
}
const ForwardRef = React.forwardRef(SvgBluetoothTagSolid);
export default ForwardRef;
