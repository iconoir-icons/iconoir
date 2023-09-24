import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { IconoirContext } from "./IconoirContext";
const SvgAirplaneHelix = (
  passedProps: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => {
  const context = React.useContext(IconoirContext);
  const props = {
    ...context,
    ...passedProps,
  };
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1.5em"
      height="1.5em"
      fill="none"
      strokeWidth={1.5}
      viewBox="0 0 24 24"
      color="currentColor"
      ref={ref}
      {...props}
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={1.5}
        d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={1.5}
        d="M12 9s-1.988-1.975-2-4c.001-1.993-.05-4.001 2-4 1.948.001 1.997 1.976 2 4 .003 1.985-2 4-2 4ZM15 12s1.975-1.988 4-2c1.993.001 4.001-.05 4 2-.001 1.948-1.976 1.997-4 2-1.985.003-4-2-4-2ZM9 12s-1.975 1.988-4 2c-1.993-.001-4.001.05-4-2 .001-1.948 1.976-1.997 4-2 1.985-.003 4 2 4 2ZM12 15s1.988 1.975 2 4c-.001 1.993.05 4.001-2 4-1.948-.001-1.997-1.976-2-4-.003-1.985 2-4 2-4Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgAirplaneHelix);
export default ForwardRef;
