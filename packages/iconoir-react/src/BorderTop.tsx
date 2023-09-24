import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { IconoirContext } from "./IconoirContext";
const SvgBorderTop = (
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
        d="m20 20.01.01-.011M16 20.01l.01-.011M12 20.01l.01-.011M8 20.01l.01-.011M4 20.01l.01-.011M4 8.01l.01-.011M4 12.01l.01-.011M12 12.01l.01-.011M4 16.01l.01-.011M20 8.01l.01-.011M20 12.01l.01-.011M20 16.01l.01-.011M4 4h16"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgBorderTop);
export default ForwardRef;
