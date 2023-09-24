import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
import { Ref, forwardRef } from "react";
import { IconoirContext } from "./IconoirContext";
const SvgGroup = (passedProps: SvgProps, ref: Ref<Svg>) => {
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
        d="M1 20v-1a7 7 0 0 1 7-7v0a7 7 0 0 1 7 7v1"
      />
      <Path
        stroke="currentColor"
        strokeLinecap="round"
        d="M13 14v0a5 5 0 0 1 5-5v0a5 5 0 0 1 5 5v.5"
      />
      <Path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM18 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
      />
    </Svg>
  );
};
const ForwardRef = forwardRef(SvgGroup);
export default ForwardRef;
