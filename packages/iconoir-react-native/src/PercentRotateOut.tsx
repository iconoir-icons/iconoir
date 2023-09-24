import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
import { Ref, forwardRef } from "react";
import { IconoirContext } from "./IconoirContext";
const SvgPercentRotateOut = (passedProps: SvgProps, ref: Ref<Svg>) => {
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
        d="M21.168 8A10.002 10.002 0 0 0 12 2c-5.185 0-9.449 3.947-9.95 9"
      />
      <Path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M18 8h3.4a.6.6 0 0 0 .6-.6V4M2.881 16c1.544 3.532 5.068 6 9.168 6 5.186 0 9.45-3.947 9.951-9"
      />
      <Path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6.05 16h-3.4a.6.6 0 0 0-.6.6V20"
      />
      <Path
        fill="currentColor"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M14.5 15a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1ZM9.5 10a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Z"
      />
      <Path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m15 9-6 6"
      />
    </Svg>
  );
};
const ForwardRef = forwardRef(SvgPercentRotateOut);
export default ForwardRef;
