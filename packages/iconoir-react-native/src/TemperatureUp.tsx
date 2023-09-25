import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
import { Ref, forwardRef } from "react";
import { IconoirContext } from "./IconoirContext";
const SvgTemperatureUp = (passedProps: SvgProps, ref: Ref<Svg>) => {
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
        d="M4 12a5 5 0 1 0 6 0M4 12V3h6v9M10 3h2M10 6h2M10 9h2"
      />
      <Path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M7 14a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm0 0V6M19 18V6m0 0 2.5 2.5M19 6l-2.5 2.5"
      />
    </Svg>
  );
};
const ForwardRef = forwardRef(SvgTemperatureUp);
export default ForwardRef;
