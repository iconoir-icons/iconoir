import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
import { Ref, forwardRef } from "react";
import { IconoirContext } from "./IconoirContext";
const SvgOpenInWindow = (passedProps: SvgProps, ref: Ref<Svg>) => {
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
        d="M8 21h12.4a.6.6 0 0 0 .6-.6V3.6a.6.6 0 0 0-.6-.6H3.6a.6.6 0 0 0-.6.6V16M3.5 20.5 12 12m0 0v4m0-4H8"
      />
    </Svg>
  );
};
const ForwardRef = forwardRef(SvgOpenInWindow);
export default ForwardRef;
