import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
import { Ref, forwardRef } from "react";
import { IconoirContext } from "./IconoirContext";
const SvgFingerprintPhone = (passedProps: SvgProps, ref: Ref<Svg>) => {
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
        d="M12 11V6.362c0-.51.1-1 .284-1.454M22 11V7.815m-7.778-5.08A5.507 5.507 0 0 1 17 2c2.28 0 4.203 1.33 4.805 3.15M15 12V9.824M19 12V6.853C19 5.83 18.105 5 17 5s-2 .83-2 1.853v.794M8 17.01l.01-.011M8 5H3.6a.6.6 0 0 0-.6.6v14.8a.6.6 0 0 0 .6.6h8.8a.6.6 0 0 0 .6-.6V16"
      />
    </Svg>
  );
};
const ForwardRef = forwardRef(SvgFingerprintPhone);
export default ForwardRef;
