import * as React from "react";
import Svg, { Rect, Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
import { Ref, forwardRef } from "react";
import { IconoirContext } from "./IconoirContext";
const SvgNetworkAlt = (passedProps: SvgProps, ref: Ref<Svg>) => {
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
        transform="matrix(1 0 0 -1 3 22)"
      />
      <Rect
        width={7}
        height={5}
        stroke="currentColor"
        rx={0.6}
        transform="matrix(1 0 0 -1 8.5 7)"
      />
      <Rect
        width={7}
        height={5}
        stroke="currentColor"
        rx={0.6}
        transform="matrix(1 0 0 -1 14 22)"
      />
      <Path
        stroke="currentColor"
        d="M6.5 17v-3.5a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2V17M12 11.5V7"
      />
    </Svg>
  );
};
const ForwardRef = forwardRef(SvgNetworkAlt);
export default ForwardRef;
