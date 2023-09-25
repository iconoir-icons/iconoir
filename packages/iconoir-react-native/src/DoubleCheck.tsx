import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
import { Ref, forwardRef } from "react";
import { IconoirContext } from "./IconoirContext";
const SvgDoubleCheck = (passedProps: SvgProps, ref: Ref<Svg>) => {
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
        d="m1.5 12.5 4.076 4.076a.6.6 0 0 0 .848 0L9 14M16 7l-4 4"
      />
      <Path
        stroke="currentColor"
        strokeLinecap="round"
        d="m7 12 4.576 4.576a.6.6 0 0 0 .848 0L22 7"
      />
    </Svg>
  );
};
const ForwardRef = forwardRef(SvgDoubleCheck);
export default ForwardRef;
