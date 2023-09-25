import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
import { Ref, forwardRef } from "react";
import { IconoirContext } from "./IconoirContext";
const SvgBridgeSurface = (passedProps: SvgProps, ref: Ref<Svg>) => {
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
        d="M3 12c0 4 2 9 8 9M10 6c0 4 2 9 8 9M3 8.5v-2M10 3V1M3 12l7-6M11 21l7-6M14.5 21h2M21 15h2"
      />
    </Svg>
  );
};
const ForwardRef = forwardRef(SvgBridgeSurface);
export default ForwardRef;
