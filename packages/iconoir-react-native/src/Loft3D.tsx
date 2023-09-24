import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
import { Ref, forwardRef } from "react";
import { IconoirContext } from "./IconoirContext";
const SvgLoft3D = (passedProps: SvgProps, ref: Ref<Svg>) => {
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
        d="M22 17c-9 0-11 6-20 6M22 1C13 1 11 7 2 7M12 16.5v-9m0 9 2.5-2.5M12 16.5 9.5 14M12 7.5l2.5 2.5M12 7.5 9.5 10"
      />
    </Svg>
  );
};
const ForwardRef = forwardRef(SvgLoft3D);
export default ForwardRef;
