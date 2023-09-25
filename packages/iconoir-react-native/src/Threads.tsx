import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
import { Ref, forwardRef } from "react";
import { IconoirContext } from "./IconoirContext";
const SvgThreads = (passedProps: SvgProps, ref: Ref<Svg>) => {
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
        d="M9.914 8.128c2.505-2.014 6.11-.94 6.536 2.372.452 3.514-.45 6.3-3.95 6.3-3.25 0-3.15-2.8-3.15-2.8 0-3 5.15-3.4 8.15-1.9C23 15.6 19 22 13 22c-4.97 0-9-2.5-9-10S8.03 2 13 2c3.508 0 6.672 1.807 7.835 5.42"
      />
    </Svg>
  );
};
const ForwardRef = forwardRef(SvgThreads);
export default ForwardRef;
