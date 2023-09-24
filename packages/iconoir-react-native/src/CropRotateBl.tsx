import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
import { Ref, forwardRef } from "react";
import { IconoirContext } from "./IconoirContext";
const SvgCropRotateBl = (passedProps: SvgProps, ref: Ref<Svg>) => {
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
        d="M4 14v3a4 4 0 0 0 4 4h4"
      />
      <Path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M1.5 16.5 4 14l2.5 2.5M20 11V5a1 1 0 0 0-1-1h-6M8 4h2M20 16v-2M10 2v11a1 1 0 0 0 1 1h11"
      />
    </Svg>
  );
};
const ForwardRef = forwardRef(SvgCropRotateBl);
export default ForwardRef;
