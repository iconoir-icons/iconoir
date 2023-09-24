import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
import { Ref, forwardRef } from "react";
import { IconoirContext } from "./IconoirContext";
const SvgCropRotateTr = (passedProps: SvgProps, ref: Ref<Svg>) => {
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
        d="M20 10V7a4 4 0 0 0-4-4h-4"
      />
      <Path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M22.5 7.5 20 10l-2.5-2.5M14 17v-6a1 1 0 0 0-1-1H7M2 10h2M14 22v-2M4 8v11a1 1 0 0 0 1 1h11"
      />
    </Svg>
  );
};
const ForwardRef = forwardRef(SvgCropRotateTr);
export default ForwardRef;
