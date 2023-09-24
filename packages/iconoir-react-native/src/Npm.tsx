import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
import { Ref, forwardRef } from "react";
import { IconoirContext } from "./IconoirContext";
const SvgNpm = (passedProps: SvgProps, ref: Ref<Svg>) => {
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
        d="M1 8h22v7H11v2H7.5v-2H1V8ZM7.5 8v7M13.5 8v7"
      />
      <Path
        stroke="currentColor"
        strokeLinecap="round"
        d="M18 11v4M5 11v4M11 11v1M20.5 11v4"
      />
    </Svg>
  );
};
const ForwardRef = forwardRef(SvgNpm);
export default ForwardRef;
