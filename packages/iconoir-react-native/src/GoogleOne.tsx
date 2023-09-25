import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
import { Ref, forwardRef } from "react";
import { IconoirContext } from "./IconoirContext";
const SvgGoogleOne = (passedProps: SvgProps, ref: Ref<Svg>) => {
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
        d="M11 5v14a2 2 0 1 0 4 0V5a2 2 0 1 0-4 0Z"
      />
      <Path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M11.64 3.53 6.747 8.171a2 2 0 0 0 2.754 2.901l4.892-4.642a2 2 0 0 0-2.753-2.902Z"
      />
    </Svg>
  );
};
const ForwardRef = forwardRef(SvgGoogleOne);
export default ForwardRef;
