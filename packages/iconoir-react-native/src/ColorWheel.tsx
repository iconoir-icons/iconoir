import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
import { Ref, forwardRef } from "react";
import { IconoirContext } from "./IconoirContext";
const SvgColorWheel = (passedProps: SvgProps, ref: Ref<Svg>) => {
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
        d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10Z"
      />
      <Path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8ZM12 2v6M12 16v6M2 12h6M16 12h6M4.929 4.929 9.172 9.17M14.828 14.829l4.243 4.242M4.929 19.071l4.243-4.242M14.828 9.171l4.243-4.242"
      />
    </Svg>
  );
};
const ForwardRef = forwardRef(SvgColorWheel);
export default ForwardRef;
