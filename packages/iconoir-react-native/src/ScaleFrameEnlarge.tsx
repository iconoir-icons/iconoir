import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
import { Ref, forwardRef } from "react";
import { IconoirContext } from "./IconoirContext";
const SvgScaleFrameEnlarge = (passedProps: SvgProps, ref: Ref<Svg>) => {
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
        d="M11 13.6V21H3.6a.6.6 0 0 1-.6-.6V13h7.4a.6.6 0 0 1 .6.6ZM11 21h3M3 13v-3M6 3H3.6a.6.6 0 0 0-.6.6V6M14 3h-4M21 10v4M18 3h2.4a.6.6 0 0 1 .6.6V6M18 21h2.4a.6.6 0 0 0 .6-.6V18M11 10h3v3"
      />
    </Svg>
  );
};
const ForwardRef = forwardRef(SvgScaleFrameEnlarge);
export default ForwardRef;
