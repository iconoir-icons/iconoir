import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
import { Ref, forwardRef } from "react";
import { IconoirContext } from "./IconoirContext";
const SvgTriangleFlagTwoStripes = (passedProps: SvgProps, ref: Ref<Svg>) => {
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
        d="M8 21v-5m0 0 9.723-6.482a.6.6 0 0 0-.017-1.01l-8.79-5.441a.6.6 0 0 0-.916.51V16ZM8 11l6.5-4.476"
      />
    </Svg>
  );
};
const ForwardRef = forwardRef(SvgTriangleFlagTwoStripes);
export default ForwardRef;
