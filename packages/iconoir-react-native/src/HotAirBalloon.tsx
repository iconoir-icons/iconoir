import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
import { Ref, forwardRef } from "react";
import { IconoirContext } from "./IconoirContext";
const SvgHotAirBalloon = (passedProps: SvgProps, ref: Ref<Svg>) => {
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
        strokeMiterlimit={1.5}
        d="M4 9.5c0 4.571 5.714 8 5.714 8h4.572S20 14.071 20 9.5s-3.582-8-8-8-8 3.429-8 8Z"
      />
      <Path
        stroke="currentColor"
        strokeLinejoin="round"
        d="M9 2c-3 6 1 15.5 1 15.5M14.884 2c3 6-1 15.5-1 15.5"
      />
      <Path
        stroke="currentColor"
        strokeLinecap="round"
        d="M13.4 23h-2.8a.6.6 0 0 1-.6-.6v-1.8a.6.6 0 0 1 .6-.6h2.8a.6.6 0 0 1 .6.6v1.8a.6.6 0 0 1-.6.6Z"
      />
    </Svg>
  );
};
const ForwardRef = forwardRef(SvgHotAirBalloon);
export default ForwardRef;
