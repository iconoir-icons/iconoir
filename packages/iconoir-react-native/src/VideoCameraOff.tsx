import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
import { Ref, forwardRef } from "react";
import { IconoirContext } from "./IconoirContext";
const SvgVideoCameraOff = (passedProps: SvgProps, ref: Ref<Svg>) => {
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
        d="M6.5 7H3.6a.6.6 0 0 0-.6.6v8.8a.6.6 0 0 0 .6.6h10.8a.6.6 0 0 0 .6-.6V15m-3.5-8h2.9a.6.6 0 0 1 .6.6v3.119a.6.6 0 0 0 .984.46l4.032-3.359a.6.6 0 0 1 .984.461V15.5M3 3l18 18"
      />
    </Svg>
  );
};
const ForwardRef = forwardRef(SvgVideoCameraOff);
export default ForwardRef;
