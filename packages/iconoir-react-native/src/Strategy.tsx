import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
import { Ref, forwardRef } from "react";
import { IconoirContext } from "./IconoirContext";
const SvgStrategy = (passedProps: SvgProps, ref: Ref<Svg>) => {
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
        d="M6 20.5C7 11 11.5 8 20 6"
      />
      <Path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15.909 3.81 20.395 5.9l-2.092 4.486M5 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM16 20.243l2.121-2.122m0 0L20.243 16m-2.122 2.121L16 16m2.121 2.121 2.122 2.122"
      />
    </Svg>
  );
};
const ForwardRef = forwardRef(SvgStrategy);
export default ForwardRef;
