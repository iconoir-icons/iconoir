import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
import { Ref, forwardRef } from "react";
import { IconoirContext } from "./IconoirContext";
const SvgPercentage = (passedProps: SvgProps, ref: Ref<Svg>) => {
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
        d="M17 19a2 2 0 1 1 0-4 2 2 0 0 1 0 4ZM7 9a2 2 0 1 1 0-4 2 2 0 0 1 0 4ZM19 5 5 19"
      />
    </Svg>
  );
};
const ForwardRef = forwardRef(SvgPercentage);
export default ForwardRef;
