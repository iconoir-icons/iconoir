import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
import { Ref, forwardRef } from "react";
import { IconoirContext } from "./IconoirContext";
const SvgSwitchOff = (passedProps: SvgProps, ref: Ref<Svg>) => {
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
        fill="currentColor"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M7 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
      />
      <Path
        stroke="currentColor"
        d="M17 17H7A5 5 0 0 1 7 7h10a5 5 0 0 1 0 10Z"
      />
    </Svg>
  );
};
const ForwardRef = forwardRef(SvgSwitchOff);
export default ForwardRef;
