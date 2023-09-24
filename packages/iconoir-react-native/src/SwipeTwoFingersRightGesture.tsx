import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
import { Ref, forwardRef } from "react";
import { IconoirContext } from "./IconoirContext";
const SvgSwipeTwoFingersRightGesture = (
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
        d="M12 17.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Zm0 0h7m0 0L16.6 15m2.4 2.5L16.6 20M12 6.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Zm0 0h7m0 0L16.6 4M19 6.5 16.6 9"
      />
    </Svg>
  );
};
const ForwardRef = forwardRef(SvgSwipeTwoFingersRightGesture);
export default ForwardRef;
