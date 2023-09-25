import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
import { Ref, forwardRef } from "react";
import { IconoirContext } from "./IconoirContext";
const SvgTriangle = (passedProps: SvgProps, ref: Ref<Svg>) => {
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
        d="M11.475 2.947a.6.6 0 0 1 1.05 0l9.373 16.912a.6.6 0 0 1-.524.891H2.626a.6.6 0 0 1-.525-.89l9.374-16.913Z"
      />
    </Svg>
  );
};
const ForwardRef = forwardRef(SvgTriangle);
export default ForwardRef;
