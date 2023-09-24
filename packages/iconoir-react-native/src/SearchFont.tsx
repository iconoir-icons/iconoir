import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
import { Ref, forwardRef } from "react";
import { IconoirContext } from "./IconoirContext";
const SvgSearchFont = (passedProps: SvgProps, ref: Ref<Svg>) => {
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
        d="M19.5 19.5 21 21M14 17a3 3 0 1 0 6 0 3 3 0 0 0-6 0ZM9 5v12m0 0H7m2 0h2M15 7V5H3v2"
      />
    </Svg>
  );
};
const ForwardRef = forwardRef(SvgSearchFont);
export default ForwardRef;
