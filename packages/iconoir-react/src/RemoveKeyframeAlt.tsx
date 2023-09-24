import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { IconoirContext } from "./IconoirContext";
const SvgRemoveKeyframeAlt = (
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
        d="M9 12h6M20.777 13.345l-7.297 8.027a2 2 0 0 1-2.96 0l-7.297-8.027a2 2 0 0 1 0-2.69l7.297-8.027a2 2 0 0 1 2.96 0l7.297 8.027a2 2 0 0 1 0 2.69Z"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgRemoveKeyframeAlt);
export default ForwardRef;
