import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
import { Ref, forwardRef } from "react";
import { IconoirContext } from "./IconoirContext";
const SvgHorizontalSplit = (passedProps: SvgProps, ref: Ref<Svg>) => {
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
        d="M10 12H2m0 0 3.5-3.5M2 12l3.5 3.5M14 12h8m0 0-3.5-3.5M22 12l-3.5 3.5M10 21V3M14 21V3"
      />
    </Svg>
  );
};
const ForwardRef = forwardRef(SvgHorizontalSplit);
export default ForwardRef;
