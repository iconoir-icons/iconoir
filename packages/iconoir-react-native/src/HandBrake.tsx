import * as React from "react";
import Svg, { Path, Circle } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
import { Ref, forwardRef } from "react";
import { IconoirContext } from "./IconoirContext";
const SvgHandBrake = (passedProps: SvgProps, ref: Ref<Svg>) => {
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
        d="M12 16v-4M12 9V8"
      />
      <Circle cx={12} cy={12} r={8} stroke="currentColor" />
      <Path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3.953 4.5A10.961 10.961 0 0 0 1 12c0 2.899 1.121 5.535 2.953 7.5M20.047 4.5A10.962 10.962 0 0 1 23 12c0 2.899-1.121 5.535-2.953 7.5"
      />
    </Svg>
  );
};
const ForwardRef = forwardRef(SvgHandBrake);
export default ForwardRef;
