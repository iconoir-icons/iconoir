import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { IconoirContext } from "./IconoirContext";
const SvgFavouriteBook = (
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
        d="M4 19V5a2 2 0 0 1 2-2h13.4a.6.6 0 0 1 .6.6v13.114"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        d="M16 8.78a2.28 2.28 0 0 1-.662 1.606c-.976.984-1.923 2.01-2.936 2.958a.597.597 0 0 1-.822-.017l-2.918-2.94a2.281 2.281 0 0 1 0-3.214 2.277 2.277 0 0 1 3.232 0L12 7.28l.106-.107A2.276 2.276 0 0 1 16 8.78Z"
      />
      <path stroke="currentColor" strokeLinecap="round" d="M6 17h14M6 21h14" />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6 21a2 2 0 1 1 0-4"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgFavouriteBook);
export default ForwardRef;
