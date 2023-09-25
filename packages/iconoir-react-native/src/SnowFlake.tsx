import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
import { Ref, forwardRef } from "react";
import { IconoirContext } from "./IconoirContext";
const SvgSnowFlake = (passedProps: SvgProps, ref: Ref<Svg>) => {
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
        d="m3 7 3.5 2M21 17l-3.5-2M12 12 6.5 9m5.5 3-5.5 3m5.5-3V5m0 7v6.5m0-6.5 5.5 3M12 12l5.5-3M12 2v3m0 17v-3.5M21 7l-3.5 2M3 17l3.5-2m0-6L3 10m3.5-1L6 5.5m.5 9.5L3 14m3.5 1L6 18.5M12 5 9.5 4M12 5l2.5-1M12 18.5l2.5 1.5M12 18.5 9.5 20m8-5 .5 3.5m-.5-3.5 3.5-1m-3.5-5 3.5 1m-3.5-1 .5-3.5"
      />
    </Svg>
  );
};
const ForwardRef = forwardRef(SvgSnowFlake);
export default ForwardRef;
