import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
import { Ref, forwardRef } from "react";
import { IconoirContext } from "./IconoirContext";
const SvgVerticalSplit = (passedProps: SvgProps, ref: Ref<Svg>) => {
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
        d="M12 14v8m0 0 3.5-3.5M12 22l-3.5-3.5M12 10V2m0 0 3.5 3.5M12 2 8.5 5.5M3 14h18M3 10h18"
      />
    </Svg>
  );
};
const ForwardRef = forwardRef(SvgVerticalSplit);
export default ForwardRef;
