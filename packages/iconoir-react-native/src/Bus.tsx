import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
import { Ref, forwardRef } from "react";
import { IconoirContext } from "./IconoirContext";
const SvgBus = (passedProps: SvgProps, ref: Ref<Svg>) => {
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
        d="m7 16.01.01-.011M17 16.01l.01-.011M3 12h18v7a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-7ZM21 8V6a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v2M7 8h10"
      />
      <Path
        stroke="currentColor"
        strokeLinecap="round"
        d="M4.5 20v1.9a.6.6 0 0 0 .6.6h2.8a.6.6 0 0 0 .6-.6V20M15.5 20v1.9a.6.6 0 0 0 .6.6h2.8a.6.6 0 0 0 .6-.6V20"
      />
    </Svg>
  );
};
const ForwardRef = forwardRef(SvgBus);
export default ForwardRef;
