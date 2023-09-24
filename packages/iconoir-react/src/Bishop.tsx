import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { IconoirContext } from "./IconoirContext";
const SvgBishop = (
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
        d="M7 17h10M9 12h6M12 3V2M11.554 3.582c-.921 1.251-2.916 4.243-2.497 6.168C9.451 11.558 11.02 12 12 12c.981 0 2.549-.442 2.943-2.25.42-1.925-1.576-4.917-2.497-6.168a.548.548 0 0 0-.892 0ZM17.8 22H6.2a.617.617 0 0 1-.5-.97c1.316-1.866 4.063-5.986 4.493-8.434.057-.326.326-.596.657-.596h2.3c.331 0 .6.27.657.596.43 2.448 3.177 6.568 4.492 8.434a.617.617 0 0 1-.499.97Z"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgBishop);
export default ForwardRef;
