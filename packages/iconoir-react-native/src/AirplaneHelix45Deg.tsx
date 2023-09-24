import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
import { Ref, forwardRef } from "react";
import { IconoirContext } from "./IconoirContext";
const SvgAirplaneHelix45Deg = (passedProps: SvgProps, ref: Ref<Svg>) => {
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
        d="M14.12 14.121A3 3 0 1 0 9.879 9.88a3 3 0 0 0 4.243 4.242Z"
      />
      <Path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={1.5}
        d="M9.879 9.879s-2.803.009-4.243-1.415c-1.409-1.41-2.864-2.793-1.414-4.242 1.378-1.377 2.81-.015 4.242 1.414C9.87 7.037 9.88 9.879 9.88 9.879ZM14.121 9.879s-.009-2.803 1.415-4.243c1.41-1.409 2.793-2.864 4.242-1.414 1.377 1.378.015 2.81-1.414 4.242-1.402 1.406-4.243 1.415-4.243 1.415ZM9.879 14.121s.009 2.803-1.415 4.243c-1.41 1.409-2.793 2.864-4.242 1.414-1.377-1.378-.015-2.81 1.414-4.242 1.401-1.406 4.243-1.415 4.243-1.415ZM14.121 14.121s2.803-.009 4.243 1.415c1.409 1.41 2.864 2.793 1.414 4.242-1.378 1.377-2.81.015-4.242-1.414-1.406-1.402-1.415-4.243-1.415-4.243Z"
        clipRule="evenodd"
      />
    </Svg>
  );
};
const ForwardRef = forwardRef(SvgAirplaneHelix45Deg);
export default ForwardRef;
