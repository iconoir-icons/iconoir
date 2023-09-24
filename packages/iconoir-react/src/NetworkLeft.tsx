import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { IconoirContext } from "./IconoirContext";
const SvgNetworkLeft = (
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
        x={2}
        y={21}
        stroke="currentColor"
        rx={0.6}
        transform="rotate(-90 2 21)"
      />
      <rect
        width={7}
        height={5}
        x={17}
        y={15.5}
        stroke="currentColor"
        rx={0.6}
        transform="rotate(-90 17 15.5)"
      />
      <rect
        width={7}
        height={5}
        x={2}
        y={10}
        stroke="currentColor"
        rx={0.6}
        transform="rotate(-90 2 10)"
      />
      <path
        stroke="currentColor"
        d="M7 17.5h3.5a2 2 0 0 0 2-2v-7a2 2 0 0 0-2-2H7M12.5 12H17"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgNetworkLeft);
export default ForwardRef;
