import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
import { Ref, forwardRef } from "react";
import { IconoirContext } from "./IconoirContext";
const SvgNumber8Square = (passedProps: SvgProps, ref: Ref<Svg>) => {
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
        d="M3 20.4V3.6a.6.6 0 0 1 .6-.6h16.8a.6.6 0 0 1 .6.6v16.8a.6.6 0 0 1-.6.6H3.6a.6.6 0 0 1-.6-.6Z"
      />
      <Path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 16c-1.38 0-2.5-.5-2.5-2s1.12-2 2.5-2 2.5.5 2.5 2-1.12 2-2.5 2ZM12 8c-1.38 0-2.5.5-2.5 2s1.12 2 2.5 2 2.5-.5 2.5-2-1.12-2-2.5-2Z"
      />
    </Svg>
  );
};
const ForwardRef = forwardRef(SvgNumber8Square);
export default ForwardRef;
