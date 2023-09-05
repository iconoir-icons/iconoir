import * as React from "react";
import { IconoirContext } from "./IconoirContext";
function SvgUmbrella(
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
        d="M19.778 4.043C17.701 2.081 14.938 1 12 1 9.062 1 6.3 2.08 4.222 4.043 2.144 6.006 1 8.616 1 11.391c0 .336.289.609.644.609.356 0 .645-.273.645-.609 0-1.013.872-1.837 1.944-1.837C6.126 9.554 5.431 12 6.823 12c1.39 0 .696-2.446 2.588-2.446C11.304 9.554 12 12 12 12s.697-2.446 2.589-2.446S15.988 12 17.178 12s.696-2.446 2.589-2.446c1.072 0 1.944.824 1.944 1.837 0 .336.289.609.645.609.355 0 .644-.273.644-.609 0-2.775-1.144-5.385-3.222-7.348z"
        stroke="currentColor"
      />
      <path
        d="M12 12v8c0 4-6 4-6 0"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
const ForwardRef = React.forwardRef(SvgUmbrella);
export default ForwardRef;
