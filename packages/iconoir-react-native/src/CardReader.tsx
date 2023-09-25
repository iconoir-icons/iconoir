import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
import { Ref, forwardRef } from "react";
import { IconoirContext } from "./IconoirContext";
const SvgCardReader = (passedProps: SvgProps, ref: Ref<Svg>) => {
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
        d="M5 19V3h14v16a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2Z"
      />
      <Path
        stroke="currentColor"
        d="M5 6H3.5a1.5 1.5 0 1 1 0-3h17a1.5 1.5 0 0 1 0 3H19"
      />
      <Path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15 3v18"
      />
    </Svg>
  );
};
const ForwardRef = forwardRef(SvgCardReader);
export default ForwardRef;
