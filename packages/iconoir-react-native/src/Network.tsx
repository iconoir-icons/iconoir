import * as React from "react";
import Svg, { Rect, Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
import { Ref, forwardRef } from "react";
import { IconoirContext } from "./IconoirContext";
const SvgNetwork = (passedProps: SvgProps, ref: Ref<Svg>) => {
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
      <Rect width={7} height={5} x={3} y={2} stroke="currentColor" rx={0.6} />
      <Rect
        width={7}
        height={5}
        x={8.5}
        y={17}
        stroke="currentColor"
        rx={0.6}
      />
      <Rect width={7} height={5} x={14} y={2} stroke="currentColor" rx={0.6} />
      <Path
        stroke="currentColor"
        d="M6.5 7v3.5a2 2 0 0 0 2 2h7a2 2 0 0 0 2-2V7M12 12.5V17"
      />
    </Svg>
  );
};
const ForwardRef = forwardRef(SvgNetwork);
export default ForwardRef;
