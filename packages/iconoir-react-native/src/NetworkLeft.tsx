import * as React from "react";
import Svg, { Rect, Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
import { Ref, forwardRef } from "react";
import { IconoirContext } from "./IconoirContext";
const SvgNetworkLeft = (passedProps: SvgProps, ref: Ref<Svg>) => {
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
        x={2}
        y={21}
        stroke="currentColor"
        rx={0.6}
        transform="rotate(-90 2 21)"
      />
      <Rect
        width={7}
        height={5}
        x={17}
        y={15.5}
        stroke="currentColor"
        rx={0.6}
        transform="rotate(-90 17 15.5)"
      />
      <Rect
        width={7}
        height={5}
        x={2}
        y={10}
        stroke="currentColor"
        rx={0.6}
        transform="rotate(-90 2 10)"
      />
      <Path
        stroke="currentColor"
        d="M7 17.5h3.5a2 2 0 0 0 2-2v-7a2 2 0 0 0-2-2H7M12.5 12H17"
      />
    </Svg>
  );
};
const ForwardRef = forwardRef(SvgNetworkLeft);
export default ForwardRef;
