import * as React from "react";
import { IconoirContext } from "./IconoirContext";
function SvgMagicWand(
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
      strokeWidth={1.5}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      color="currentColor"
      ref={svgRef}
      {...props}
    >
      <path
        d="M3 21l10-10m5-5l-2.5 2.5"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.5 2l.945 2.555L13 5.5l-2.555.945L9.5 9l-.945-2.555L6 5.5l2.555-.945L9.5 2zM19 10l.54 1.46L21 12l-1.46.54L19 14l-.54-1.46L17 12l1.46-.54L19 10z"
        stroke="currentColor"
        strokeLinejoin="round"
      />
    </svg>
  );
}
const ForwardRef = React.forwardRef(SvgMagicWand);
export default ForwardRef;
