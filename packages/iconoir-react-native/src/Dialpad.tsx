import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
import { Ref, forwardRef } from "react";
import { IconoirContext } from "./IconoirContext";
const SvgDialpad = (passedProps: SvgProps, ref: Ref<Svg>) => {
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
        d="M5.5 5a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1ZM5.5 10a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1ZM5.5 15a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1ZM12 5a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1ZM12 10a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1ZM12 15a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1ZM12 20a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1ZM18.5 5a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1ZM18.5 10a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1ZM18.5 15a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1Z"
      />
    </Svg>
  );
};
const ForwardRef = forwardRef(SvgDialpad);
export default ForwardRef;
