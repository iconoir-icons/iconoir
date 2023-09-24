import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
import { Ref, forwardRef } from "react";
import { IconoirContext } from "./IconoirContext";
const SvgLockedBook = (passedProps: SvgProps, ref: Ref<Svg>) => {
  const context = React.useContext(IconoirContext);
  const props = {
    ...context,
    ...passedProps,
  };
  return (
    <Svg
      width="1.5em"
      height="1.5em"
      fill="none"
      strokeWidth={1.5}
      viewBox="0 0 24 24"
      color="currentColor"
      ref={ref}
      {...props}
    >
      <Path
        stroke="currentColor"
        strokeLinecap="round"
        d="M4 19V5a2 2 0 0 1 2-2h13.4a.6.6 0 0 1 .6.6v13.114"
      />
      <Path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M14 10h.4a.6.6 0 0 1 .6.6v2.8a.6.6 0 0 1-.6.6H9.6a.6.6 0 0 1-.6-.6v-2.8a.6.6 0 0 1 .6-.6h.4m4 0V8c0-.667-.4-2-2-2s-2 1.333-2 2v2m4 0h-4"
      />
      <Path stroke="currentColor" strokeLinecap="round" d="M6 17h14M6 21h14" />
      <Path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6 21a2 2 0 1 1 0-4"
      />
    </Svg>
  );
};
const ForwardRef = forwardRef(SvgLockedBook);
export default ForwardRef;
