import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
import { Ref, forwardRef } from "react";
import { IconoirContext } from "./IconoirContext";
const SvgBounceLeft = (passedProps: SvgProps, ref: Ref<Svg>) => {
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
        d="M6 7a2 2 0 1 1 0-4 2 2 0 0 1 0 4ZM21 15.5c-3-1-5.5-.5-8 4.5-.5-3-2-7.5-3.5-10"
      />
    </Svg>
  );
};
const ForwardRef = forwardRef(SvgBounceLeft);
export default ForwardRef;
