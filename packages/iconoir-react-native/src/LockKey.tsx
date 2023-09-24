import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
import { Ref, forwardRef } from "react";
import { IconoirContext } from "./IconoirContext";
const SvgLockKey = (passedProps: SvgProps, ref: Ref<Svg>) => {
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
        strokeLinejoin="round"
        d="M14.667 12h.733a.6.6 0 0 1 .6.6v3.8a.6.6 0 0 1-.6.6H8.6a.6.6 0 0 1-.6-.6v-3.8a.6.6 0 0 1 .6-.6h.733m5.334 0V9.5c0-.833-.534-2.5-2.667-2.5S9.333 8.667 9.333 9.5V12m5.334 0H9.333"
      />
      <Path
        stroke="currentColor"
        d="M3 19V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z"
      />
    </Svg>
  );
};
const ForwardRef = forwardRef(SvgLockKey);
export default ForwardRef;
