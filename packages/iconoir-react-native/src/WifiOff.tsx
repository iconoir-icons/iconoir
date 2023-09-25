import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
import { Ref, forwardRef } from "react";
import { IconoirContext } from "./IconoirContext";
const SvgWifiOff = (passedProps: SvgProps, ref: Ref<Svg>) => {
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
        d="m12 19.51.01-.011M3 3l18 18M2 8a17.053 17.053 0 0 1 3.757-2.14M22 8c-3.572-2.68-7.854-3.763-12-3.252M5 12c1.333-1 2.889-1.667 4.518-2M19 12c-1.269-.951-2.738-1.601-4.282-1.95M8.5 15.5c2.25-1.4 4.75-1.4 7 0"
      />
    </Svg>
  );
};
const ForwardRef = forwardRef(SvgWifiOff);
export default ForwardRef;
