import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { IconoirContext } from "./IconoirContext";
const SvgPerspectiveView = (
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
        d="M1 21 4.143 3h15.714L23 21H1ZM2 16.5h20M3 12h18M4 7.5h16M12 3v18M8 3.5l-1.5 17M16 3.5l1.5 17"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgPerspectiveView);
export default ForwardRef;
