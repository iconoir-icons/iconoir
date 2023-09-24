import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
import { Ref, forwardRef } from "react";
import { IconoirContext } from "./IconoirContext";
const SvgCylinder = (passedProps: SvgProps, ref: Ref<Svg>) => {
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
        d="M12 2c8 0 8 3 8 3s0 3-8 3-8-3-8-3 0-3 8-3ZM12 16c8 0 8 3 8 3s0 3-8 3-8-3-8-3 0-3 8-3Z"
      />
      <Path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M20 5v14M4 5v14"
      />
    </Svg>
  );
};
const ForwardRef = forwardRef(SvgCylinder);
export default ForwardRef;
