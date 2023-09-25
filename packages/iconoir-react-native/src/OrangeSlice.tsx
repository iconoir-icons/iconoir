import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
import { Ref, forwardRef } from "react";
import { IconoirContext } from "./IconoirContext";
const SvgOrangeSlice = (passedProps: SvgProps, ref: Ref<Svg>) => {
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
        d="m10.613 10.11 7.778-7.777c4.295 4.296 4.295 11.26 0 15.556-4.296 4.296-11.261 4.296-15.557 0l7.779-7.778Zm0 0-.354 8.133m.354-8.132h7.778m-7.778 0 5.303 5.303"
      />
    </Svg>
  );
};
const ForwardRef = forwardRef(SvgOrangeSlice);
export default ForwardRef;
