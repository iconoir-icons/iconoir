import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
import { Ref, forwardRef } from "react";
import { IconoirContext } from "./IconoirContext";
const SvgFridge = (passedProps: SvgProps, ref: Ref<Svg>) => {
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
        d="M10 14H9M10 6H9"
      />
      <Path
        stroke="currentColor"
        d="M5 10V2.6a.6.6 0 0 1 .6-.6h12.8a.6.6 0 0 1 .6.6V10M5 10v11.4a.6.6 0 0 0 .6.6h12.8a.6.6 0 0 0 .6-.6V10M5 10h14"
      />
    </Svg>
  );
};
const ForwardRef = forwardRef(SvgFridge);
export default ForwardRef;
