import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
import { Ref, forwardRef } from "react";
import { IconoirContext } from "./IconoirContext";
const SvgTimerOff = (passedProps: SvgProps, ref: Ref<Svg>) => {
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
        d="M9 2h6M5 7l14 14.5M12 10v4M6.19 8.5a8 8 0 0 0 11.05 11.544M19.42 17A8 8 0 0 0 9.21 6.5"
      />
    </Svg>
  );
};
const ForwardRef = forwardRef(SvgTimerOff);
export default ForwardRef;
