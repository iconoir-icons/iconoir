import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { IconoirContext } from "./IconoirContext";
const SvgKeyframeAlignCenter = (
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
        d="m16.68 12.384-4.22 5.063a.6.6 0 0 1-.92 0l-4.22-5.063a.6.6 0 0 1 0-.768l4.22-5.063a.6.6 0 0 1 .92 0l4.22 5.063a.6.6 0 0 1 0 .768ZM12 22v-2M12 4V2M4 12H2M22 12h-2"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgKeyframeAlignCenter);
export default ForwardRef;
