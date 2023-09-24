import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
import { Ref, forwardRef } from "react";
import { IconoirContext } from "./IconoirContext";
const SvgSvgFormat = (passedProps: SvgProps, ref: Ref<Svg>) => {
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
        d="M4.5 15h2A1.5 1.5 0 0 0 8 13.5v0A1.5 1.5 0 0 0 6.5 12H6a1.5 1.5 0 0 1-1.5-1.5v0A1.5 1.5 0 0 1 6 9h1.5M10.5 9l1.5 6 1.5-6M19.5 9h-3v6h3v-2.4"
      />
      <Path
        stroke="currentColor"
        strokeLinecap="round"
        d="M4 6V3.6a.6.6 0 0 1 .6-.6h14.8a.6.6 0 0 1 .6.6V6M4 18v2.4a.6.6 0 0 0 .6.6h14.8a.6.6 0 0 0 .6-.6V18"
      />
    </Svg>
  );
};
const ForwardRef = forwardRef(SvgSvgFormat);
export default ForwardRef;
