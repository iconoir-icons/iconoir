import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { IconoirContext } from "./IconoirContext";
const SvgSoap = (
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
        d="M7 11a4 4 0 0 1 4-4h2a4 4 0 0 1 4 4v9.4a.6.6 0 0 1-.6.6H7.6a.6.6 0 0 1-.6-.6V11ZM7 13h10M12 7V3m0 0H9m3 0h1"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgSoap);
export default ForwardRef;
