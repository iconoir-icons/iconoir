import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
import { Ref, forwardRef } from "react";
import { IconoirContext } from "./IconoirContext";
const SvgSwipeTwoFingersDownGesture = (
  passedProps: SvgProps,
  ref: Ref<Svg>
) => {
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
        d="M6.5 12a3.5 3.5 0 1 1 0-7 3.5 3.5 0 0 1 0 7Zm0 0v7m0 0L9 16.6M6.5 19 4 16.6M17.5 12a3.5 3.5 0 1 1 0-7 3.5 3.5 0 0 1 0 7Zm0 0v7m0 0 2.5-2.4M17.5 19 15 16.6"
      />
    </Svg>
  );
};
const ForwardRef = forwardRef(SvgSwipeTwoFingersDownGesture);
export default ForwardRef;
