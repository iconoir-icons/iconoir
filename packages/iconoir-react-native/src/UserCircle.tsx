import * as React from "react";
import Svg, { Path, Circle } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
import { Ref, forwardRef } from "react";
import { IconoirContext } from "./IconoirContext";
const SvgUserCircle = (passedProps: SvgProps, ref: Ref<Svg>) => {
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
        d="M7 18v-1a5 5 0 0 1 5-5v0a5 5 0 0 1 5 5v1"
      />
      <Path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 12a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
      />
      <Circle cx={12} cy={12} r={10} stroke="currentColor" />
    </Svg>
  );
};
const ForwardRef = forwardRef(SvgUserCircle);
export default ForwardRef;
