import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
import { Ref, forwardRef } from "react";
import { IconoirContext } from "./IconoirContext";
const SvgCutSolidWithCurve = (passedProps: SvgProps, ref: Ref<Svg>) => {
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
        d="M3.528 7.293 9 10.333M22 2h-2m-8 10v-2a8.004 8.004 0 0 1 5.5-7.602M22 12h-2m-8 10v-2a8.004 8.004 0 0 1 5.5-7.602"
      />
      <Path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m12 22-8.691-4.828A.6.6 0 0 1 3 16.647V7.353a.6.6 0 0 1 .309-.524l8.4-4.667a.6.6 0 0 1 .582 0L15 3.667M12 12 3.528 7.293M12 21v-9M15 13.5V4"
      />
    </Svg>
  );
};
const ForwardRef = forwardRef(SvgCutSolidWithCurve);
export default ForwardRef;
