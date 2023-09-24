import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
import { Ref, forwardRef } from "react";
import { IconoirContext } from "./IconoirContext";
const SvgHorizDistributionLeft = (passedProps: SvgProps, ref: Ref<Svg>) => {
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
        d="M19 17V7m0 10h-5.4a.6.6 0 0 1-.6-.6V7.6a.6.6 0 0 1 .6-.6H19m0 10v3m0-13V4M9 17V7m0 10H5.6a.6.6 0 0 1-.6-.6V7.6a.6.6 0 0 1 .6-.6H9m0 10v3M9 7V4"
      />
    </Svg>
  );
};
const ForwardRef = forwardRef(SvgHorizDistributionLeft);
export default ForwardRef;
