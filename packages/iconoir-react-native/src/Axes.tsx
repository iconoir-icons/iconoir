import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
import { Ref, forwardRef } from "react";
import { IconoirContext } from "./IconoirContext";
const SvgAxes = (passedProps: SvgProps, ref: Ref<Svg>) => {
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
        d="m21 19.452-9-6.61m0 0V3m0 9.843-9 6.609M20.438 16.71 21 19.452 18.187 20M9.75 5.194 12 3l2.25 2.194M5.813 20 3 19.452l.563-2.742"
      />
    </Svg>
  );
};
const ForwardRef = forwardRef(SvgAxes);
export default ForwardRef;
