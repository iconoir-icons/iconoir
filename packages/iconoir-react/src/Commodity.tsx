import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { IconoirContext } from "./IconoirContext";
const SvgCommodity = (
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
        d="m12.147 18.28 1.184-5.8a.6.6 0 0 1 .588-.48h6.162a.6.6 0 0 1 .588.48l1.184 5.8a.6.6 0 0 1-.588.72h-8.53a.6.6 0 0 1-.588-.72Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        d="m7.147 11.28 1.184-5.8A.6.6 0 0 1 8.918 5h6.164a.6.6 0 0 1 .587.48l1.184 5.8a.6.6 0 0 1-.588.72h-8.53a.6.6 0 0 1-.588-.72Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        d="m2.147 18.28 1.184-5.8a.6.6 0 0 1 .587-.48h6.163a.6.6 0 0 1 .588.48l1.184 5.8a.6.6 0 0 1-.588.72h-8.53a.6.6 0 0 1-.588-.72Z"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgCommodity);
export default ForwardRef;
