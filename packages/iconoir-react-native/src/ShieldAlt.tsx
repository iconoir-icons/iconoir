import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
import { Ref, forwardRef } from "react";
import { IconoirContext } from "./IconoirContext";
const SvgShieldAlt = (passedProps: SvgProps, ref: Ref<Svg>) => {
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
        d="m3.571 8-.44-3.084A1 1 0 0 1 3.904 3.8l7.662-1.703a2 2 0 0 1 .868 0L20.096 3.8a1 1 0 0 1 .773 1.117L20.43 8M3.57 8H20.43M3.57 8c.309 2.16.69 4.822 1 7M20.43 8c-.309 2.16-.69 4.822-1 7m0 0L19 18c-.07.495-.5 3.5-7 3.5S5.07 18.495 5 18l-.429-3m14.858 0H4.57"
      />
    </Svg>
  );
};
const ForwardRef = forwardRef(SvgShieldAlt);
export default ForwardRef;
