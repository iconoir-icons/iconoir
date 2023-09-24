import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
import { Ref, forwardRef } from "react";
import { IconoirContext } from "./IconoirContext";
const SvgCell2X2 = (passedProps: SvgProps, ref: Ref<Svg>) => {
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
        d="M21 3.6V12h-9V3h8.4a.6.6 0 0 1 .6.6ZM21 20.4V12h-9v9h8.4a.6.6 0 0 0 .6-.6ZM3 12V3.6a.6.6 0 0 1 .6-.6H12v9H3ZM3 12v8.4a.6.6 0 0 0 .6.6H12v-9H3Z"
      />
    </Svg>
  );
};
const ForwardRef = forwardRef(SvgCell2X2);
export default ForwardRef;
