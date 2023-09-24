import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
import { Ref, forwardRef } from "react";
import { IconoirContext } from "./IconoirContext";
const SvgBusStop = (passedProps: SvgProps, ref: Ref<Svg>) => {
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
        d="m16 16.01.01-.011M6 16.01l.01-.011M20 22V8m0 0h-2V2h4v6h-2ZM16 20H2.6a.6.6 0 0 1-.6-.6v-6.8a.6.6 0 0 1 .6-.6H16M14 8H6m8-6H6a4 4 0 0 0-4 4v2"
      />
      <Path
        stroke="currentColor"
        strokeLinecap="round"
        d="M3.5 20v1.9a.6.6 0 0 0 .6.6h2.8a.6.6 0 0 0 .6-.6V20M14.5 20v1.9a.6.6 0 0 0 .6.6h.9"
      />
    </Svg>
  );
};
const ForwardRef = forwardRef(SvgBusStop);
export default ForwardRef;
