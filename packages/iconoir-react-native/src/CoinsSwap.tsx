import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
import { Ref, forwardRef } from "react";
import { IconoirContext } from "./IconoirContext";
const SvgCoinsSwap = (passedProps: SvgProps, ref: Ref<Svg>) => {
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
        d="M9.019 9A6.5 6.5 0 1 1 15 14.981"
      />
      <Path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M8.5 22a6.5 6.5 0 1 1 0-13 6.5 6.5 0 0 1 0 13ZM22 17a3 3 0 0 1-3 3h-2m0 0 2-2m-2 2 2 2M2 7a3 3 0 0 1 3-3h2m0 0L5 6m2-2L5 2"
      />
    </Svg>
  );
};
const ForwardRef = forwardRef(SvgCoinsSwap);
export default ForwardRef;
