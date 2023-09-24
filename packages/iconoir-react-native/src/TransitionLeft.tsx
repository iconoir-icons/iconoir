import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
import { Ref, forwardRef } from "react";
import { IconoirContext } from "./IconoirContext";
const SvgTransitionLeft = (passedProps: SvgProps, ref: Ref<Svg>) => {
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
        d="M22 18V6a3 3 0 0 0-3-3h-2a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h2a3 3 0 0 0 3-3Z"
      />
      <Path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M8 3H6a4 4 0 0 0-4 4v10a4 4 0 0 0 4 4h2M14 12H6m0 0 3-3m-3 3 3 3"
      />
    </Svg>
  );
};
const ForwardRef = forwardRef(SvgTransitionLeft);
export default ForwardRef;
