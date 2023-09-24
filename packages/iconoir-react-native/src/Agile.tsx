import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
import { Ref, forwardRef } from "react";
import { IconoirContext } from "./IconoirContext";
const SvgAgile = (passedProps: SvgProps, ref: Ref<Svg>) => {
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
        d="M17.5 19H22m0 0-2.5-2.5M22 19l-2.5 2.5M12 2 9.5 4.5 12 7"
      />
      <Path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M10.5 4.5a7.5 7.5 0 0 1 0 15H2"
      />
      <Path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6.756 5.5A7.497 7.497 0 0 0 3 12c0 1.688.558 3.246 1.5 4.5"
      />
    </Svg>
  );
};
const ForwardRef = forwardRef(SvgAgile);
export default ForwardRef;
