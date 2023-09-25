import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
import { Ref, forwardRef } from "react";
import { IconoirContext } from "./IconoirContext";
const SvgPalette = (passedProps: SvgProps, ref: Ref<Svg>) => {
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
        d="M20.51 9.54a1.899 1.899 0 0 1-1 1.09A7 7 0 0 0 15.37 17c.001.47.048.939.14 1.4a2.16 2.16 0 0 1-.31 1.65 1.79 1.79 0 0 1-1.21.8 9 9 0 0 1-10.62-9.13A9.05 9.05 0 0 1 11.85 3h.51a9 9 0 0 1 8.06 5 2 2 0 0 1 .09 1.52v.02Z"
      />
      <Path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m8 16.01.01-.011M6 12.01l.01-.011M8 8.01l.01-.011M12 6.01l.01-.011M16 8.01l.01-.011"
      />
    </Svg>
  );
};
const ForwardRef = forwardRef(SvgPalette);
export default ForwardRef;
