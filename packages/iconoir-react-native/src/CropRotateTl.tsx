import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
import { Ref, forwardRef } from "react";
import { IconoirContext } from "./IconoirContext";
const SvgCropRotateTl = (passedProps: SvgProps, ref: Ref<Svg>) => {
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
        d="M10 4H7a4 4 0 0 0-4 4v4"
      />
      <Path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M7.5 1.5 10 4 7.5 6.5M20 17v-6a1 1 0 0 0-1-1h-6M8 10h2M20 22v-2M10 8v11a1 1 0 0 0 1 1h11"
      />
    </Svg>
  );
};
const ForwardRef = forwardRef(SvgCropRotateTl);
export default ForwardRef;
