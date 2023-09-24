import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
import { Ref, forwardRef } from "react";
import { IconoirContext } from "./IconoirContext";
const SvgPathArrow = (passedProps: SvgProps, ref: Ref<Svg>) => {
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
        d="M18 16.5V3m0 0 3.5 3.5M18 3l-3.5 3.5M18 16.5a3.5 3.5 0 1 1-7 0v-9M11 7.5a3.5 3.5 0 1 0-7 0v12"
      />
    </Svg>
  );
};
const ForwardRef = forwardRef(SvgPathArrow);
export default ForwardRef;
