import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
import { Ref, forwardRef } from "react";
import { IconoirContext } from "./IconoirContext";
const SvgUserScan = (passedProps: SvgProps, ref: Ref<Svg>) => {
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
        d="M6 3H3v3M18 3h3v3M6 21H3v-3M7 18v-1a5 5 0 0 1 5-5v0a5 5 0 0 1 5 5v1M12 12a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM18 21h3v-3"
      />
    </Svg>
  );
};
const ForwardRef = forwardRef(SvgUserScan);
export default ForwardRef;
