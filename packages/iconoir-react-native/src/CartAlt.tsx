import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
import { Ref, forwardRef } from "react";
import { IconoirContext } from "./IconoirContext";
const SvgCartAlt = (passedProps: SvgProps, ref: Ref<Svg>) => {
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
        fill="currentColor"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 22a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM9.5 22a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"
      />
      <Path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M16.5 4H22l-2 11h-4.5m1-11-1 11m1-11h-5.75m4.75 11h-4m-.75-11H5l2 11h4.5m-.75-11 .75 11M5 4c-.167-.667-1-2-3-2M20 15H5.23c-1.784 0-2.73.781-2.73 2 0 1.219.946 2 2.73 2H19.5"
      />
    </Svg>
  );
};
const ForwardRef = forwardRef(SvgCartAlt);
export default ForwardRef;
