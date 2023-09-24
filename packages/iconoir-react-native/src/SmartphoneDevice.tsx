import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
import { Ref, forwardRef } from "react";
import { IconoirContext } from "./IconoirContext";
const SvgSmartphoneDevice = (passedProps: SvgProps, ref: Ref<Svg>) => {
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
        d="m12 16.01.01-.011"
      />
      <Path
        stroke="currentColor"
        d="M7 19.4V4.6a.6.6 0 0 1 .6-.6h8.8a.6.6 0 0 1 .6.6v14.8a.6.6 0 0 1-.6.6H7.6a.6.6 0 0 1-.6-.6Z"
      />
    </Svg>
  );
};
const ForwardRef = forwardRef(SvgSmartphoneDevice);
export default ForwardRef;
