import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
import { Ref, forwardRef } from "react";
import { IconoirContext } from "./IconoirContext";
const SvgWifi = (passedProps: SvgProps, ref: Ref<Svg>) => {
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
        d="m12 19.51.01-.011M2 8c6-4.5 14-4.5 20 0M5 12c4-3 10-3 14 0M8.5 15.5c2.25-1.4 4.75-1.4 7 0"
      />
    </Svg>
  );
};
const ForwardRef = forwardRef(SvgWifi);
export default ForwardRef;
