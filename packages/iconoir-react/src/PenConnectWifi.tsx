import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { IconoirContext } from "./IconoirContext";
const SvgPenConnectWifi = (
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
        d="m8 9.76.01-.011M3 6.25c2.5-3 7.5-3 10 0M5 8.25c1.5-2 4.5-2 6 0M17.5 6.5l1-1a2.121 2.121 0 0 1 3 0v0a2.121 2.121 0 0 1 0 3l-1 1m-3-3L6.696 17.304a1 1 0 0 0-.263.465L5.5 21.5l3.731-.933a1 1 0 0 0 .465-.263L20.5 9.5m-3-3 3 3"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgPenConnectWifi);
export default ForwardRef;
