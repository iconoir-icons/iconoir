import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
import { Ref, forwardRef } from "react";
import { IconoirContext } from "./IconoirContext";
const SvgDbWarning = (passedProps: SvgProps, ref: Ref<Svg>) => {
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
        d="M20 16v2M20 22.01l.01-.011M4 6v6s0 3 7 3 7-3 7-3V6"
      />
      <Path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M11 3c7 0 7 3 7 3s0 3-7 3-7-3-7-3 0-3 7-3ZM11 21c-7 0-7-3-7-3v-6"
      />
    </Svg>
  );
};
const ForwardRef = forwardRef(SvgDbWarning);
export default ForwardRef;
