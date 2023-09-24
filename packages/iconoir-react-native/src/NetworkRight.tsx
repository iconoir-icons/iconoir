import * as React from "react";
import Svg, { Rect, Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
import { Ref, forwardRef } from "react";
import { IconoirContext } from "./IconoirContext";
const SvgNetworkRight = (passedProps: SvgProps, ref: Ref<Svg>) => {
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
      <Rect
        width={7}
        height={5}
        stroke="currentColor"
        rx={0.6}
        transform="matrix(0 -1 -1 0 22 21)"
      />
      <Rect
        width={7}
        height={5}
        stroke="currentColor"
        rx={0.6}
        transform="matrix(0 -1 -1 0 7 15.5)"
      />
      <Rect
        width={7}
        height={5}
        stroke="currentColor"
        rx={0.6}
        transform="matrix(0 -1 -1 0 22 10)"
      />
      <Path
        stroke="currentColor"
        d="M17 17.5h-3.5a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2H17M11.5 12H7"
      />
    </Svg>
  );
};
const ForwardRef = forwardRef(SvgNetworkRight);
export default ForwardRef;
