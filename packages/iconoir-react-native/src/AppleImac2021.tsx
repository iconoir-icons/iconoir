import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
import { Ref, forwardRef } from "react";
import { IconoirContext } from "./IconoirContext";
const SvgAppleImac2021 = (passedProps: SvgProps, ref: Ref<Svg>) => {
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
        d="M2 15.5V2.6a.6.6 0 0 1 .6-.6h18.8a.6.6 0 0 1 .6.6v12.9m-20 0v1.9a.6.6 0 0 0 .6.6h18.8a.6.6 0 0 0 .6-.6v-1.9m-20 0h20M9 22h1.5m0 0v-4m0 4h3m0 0H15m-1.5 0v-4"
      />
    </Svg>
  );
};
const ForwardRef = forwardRef(SvgAppleImac2021);
export default ForwardRef;
