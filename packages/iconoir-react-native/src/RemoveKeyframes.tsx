import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
import { Ref, forwardRef } from "react";
import { IconoirContext } from "./IconoirContext";
const SvgRemoveKeyframes = (passedProps: SvgProps, ref: Ref<Svg>) => {
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
        d="M2 12h6M6.25 6l.245-.28a2 2 0 0 1 3.01 0l4.343 4.963a2 2 0 0 1 0 2.634L9.505 18.28a2 2 0 0 1-3.01 0L6.25 18"
      />
      <Path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m13 19 4.884-5.698a2 2 0 0 0 0-2.604L13 5"
      />
      <Path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m17 19 4.884-5.698a2 2 0 0 0 0-2.604L17 5"
      />
    </Svg>
  );
};
const ForwardRef = forwardRef(SvgRemoveKeyframes);
export default ForwardRef;
