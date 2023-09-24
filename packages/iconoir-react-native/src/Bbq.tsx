import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
import { Ref, forwardRef } from "react";
import { IconoirContext } from "./IconoirContext";
const SvgBbq = (passedProps: SvgProps, ref: Ref<Svg>) => {
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
        d="M8.5 14.5 5 22M8 6s1-1.061 1-2c0-1.333-1-2-1-2M12 6s1-1.061 1-2c0-1.333-1-2-1-2M16 6s1-1.061 1-2c0-1.333-1-2-1-2"
      />
      <Path stroke="currentColor" strokeLinejoin="round" d="M16.5 17.5h-9" />
      <Path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m15.5 14.5 2.1 4.5M18.5 22a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"
      />
      <Path
        stroke="currentColor"
        d="M12 15a7 7 0 0 0 6.975-6.4.563.563 0 0 0-.575-.6H5.6a.563.563 0 0 0-.575.6A7 7 0 0 0 12 15Z"
      />
    </Svg>
  );
};
const ForwardRef = forwardRef(SvgBbq);
export default ForwardRef;
