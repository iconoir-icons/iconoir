import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { IconoirContext } from "./IconoirContext";
const SvgNetworkAlt = (
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
      <rect
        width={7}
        height={5}
        stroke="currentColor"
        rx={0.6}
        transform="matrix(1 0 0 -1 3 22)"
      />
      <rect
        width={7}
        height={5}
        stroke="currentColor"
        rx={0.6}
        transform="matrix(1 0 0 -1 8.5 7)"
      />
      <rect
        width={7}
        height={5}
        stroke="currentColor"
        rx={0.6}
        transform="matrix(1 0 0 -1 14 22)"
      />
      <path
        stroke="currentColor"
        d="M6.5 17v-3.5a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2V17M12 11.5V7"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgNetworkAlt);
export default ForwardRef;
