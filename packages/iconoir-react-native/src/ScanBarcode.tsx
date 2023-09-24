import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
import { Ref, forwardRef } from "react";
import { IconoirContext } from "./IconoirContext";
const SvgScanBarcode = (passedProps: SvgProps, ref: Ref<Svg>) => {
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
        d="M10 12V6h1M10 12h1V6M10 18v-3h1M11 15v3h-1M7 6v6M7 15v3M14 6v6M14 15v3M17 6v6M17 15v3M6 3H3v3M2 12h20M18 3h3v3M6 21H3v-3M18 21h3v-3"
      />
    </Svg>
  );
};
const ForwardRef = forwardRef(SvgScanBarcode);
export default ForwardRef;
