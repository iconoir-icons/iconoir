import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
import { Ref, forwardRef } from "react";
import { IconoirContext } from "./IconoirContext";
const SvgPuzzle = (passedProps: SvgProps, ref: Ref<Svg>) => {
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
        d="M4 14v4.4a.6.6 0 0 0 .6.6H10M19 14v4.4a.6.6 0 0 1-.6.6H14M14 5h4.4a.6.6 0 0 1 .6.6V10M4 10V5.6a.6.6 0 0 1 .6-.6H10M14 19v1a2 2 0 1 1-4 0v-1M4 10h1a2 2 0 1 1 0 4H4M19 10h1a2 2 0 1 1 0 4h-1M14 5V4a2 2 0 1 0-4 0v1"
      />
    </Svg>
  );
};
const ForwardRef = forwardRef(SvgPuzzle);
export default ForwardRef;
