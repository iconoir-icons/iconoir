import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { IconoirContext } from "./IconoirContext";
const SvgClosedCaptions = (
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
        d="M1 15V9a6 6 0 0 1 6-6h10a6 6 0 0 1 6 6v6a6 6 0 0 1-6 6H7a6 6 0 0 1-6-6Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        d="m10.5 10-.172-.172a2.828 2.828 0 0 0-2-.828v0A2.828 2.828 0 0 0 5.5 11.828v.344A2.828 2.828 0 0 0 8.328 15v0c.75 0 1.47-.298 2-.828L10.5 14M18.5 10l-.172-.172a2.828 2.828 0 0 0-2-.828v0a2.828 2.828 0 0 0-2.828 2.828v.344A2.828 2.828 0 0 0 16.328 15v0c.75 0 1.47-.298 2-.828L18.5 14"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgClosedCaptions);
export default ForwardRef;
