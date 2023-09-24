import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { IconoirContext } from "./IconoirContext";
const SvgWateringSoil = (
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
        d="M2 12h2M20 12h2M3 20.01l.01-.011M6 16.01l.01-.011M9 20.01l.01-.011M15 20.01l.01-.011M18 16.01l.01-.011M21 20.01l.01-.011M12.396 3.396 15.5 6.5a4.95 4.95 0 1 1-7 0l3.104-3.104a.56.56 0 0 1 .792 0Z"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgWateringSoil);
export default ForwardRef;
