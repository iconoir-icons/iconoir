import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { IconoirContext } from "./IconoirContext";
const SvgMusicNoteAdd = (
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
        d="M16 10h3m3 0h-3m0 0V7m0 3v3M7 16v3a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-1a2 2 0 0 1 2-2h3Zm0 0V8m0 0V4l5-1v4L7 8Z"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgMusicNoteAdd);
export default ForwardRef;
