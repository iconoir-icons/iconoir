import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
import { Ref, forwardRef } from "react";
import { IconoirContext } from "./IconoirContext";
const SvgLightBulb = (passedProps: SvgProps, ref: Ref<Svg>) => {
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
        d="M9 18h6M10 21h4M9 15c.001-2-.499-2.5-1.5-3.5-1-1-1.476-2.013-1.5-3.5-.047-3.05 2-5 6-5 4.001 0 6.049 1.95 6 5-.023 1.487-.5 2.5-1.5 3.5-.999 1-1.499 1.5-1.5 3.5"
      />
    </Svg>
  );
};
const ForwardRef = forwardRef(SvgLightBulb);
export default ForwardRef;
