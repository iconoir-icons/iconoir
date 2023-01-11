import * as React from "react";
import { IconoirContext } from "./IconoirContext";
function SvgShopAlt(
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
        d="M20.485 3h-3.992l.5 5s1 1 2.5 1a3.23 3.23 0 002.139-.806.503.503 0 00.15-.465L21.076 3.5A.6.6 0 0020.485 3z"
        stroke="currentColor"
      />
      <path
        d="M16.493 3l.5 5s-1 1-2.5 1-2.5-1-2.5-1V3h4.5z"
        stroke="currentColor"
      />
      <path
        d="M11.993 3v5s-1 1-2.5 1-2.5-1-2.5-1l.5-5h4.5z"
        stroke="currentColor"
      />
      <path
        d="M7.493 3H3.502a.6.6 0 00-.592.501L2.205 7.73c-.029.172.02.349.15.465.328.29 1.061.806 2.138.806 1.5 0 2.5-1 2.5-1l.5-5z"
        stroke="currentColor"
      />
      <path d="M3 9v10a2 2 0 002 2h14a2 2 0 002-2V9" stroke="currentColor" />
      <path
        d="M14.833 21v-6a2 2 0 00-2-2h-2a2 2 0 00-2 2v6"
        stroke="currentColor"
        strokeMiterlimit={16}
      />
    </svg>
  );
}
const ForwardRef = React.forwardRef(SvgShopAlt);
export default ForwardRef;
