import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { IconoirContext } from "./IconoirContext";
const SvgRemoveDatabaseScript = (
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
        d="M22 14V8.5M6 13V6a3 3 0 0 1 3-3h5M18 4h4M12 21H6a4 4 0 0 1 0-8h12a4 4 0 1 0 4 4v-3"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgRemoveDatabaseScript);
export default ForwardRef;
