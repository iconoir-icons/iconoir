import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
import { Ref, forwardRef } from "react";
import { IconoirContext } from "./IconoirContext";
const SvgNintendoSwitch = (passedProps: SvgProps, ref: Ref<Svg>) => {
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
        d="M2 17V7a4 4 0 0 1 4-4h3.9a.6.6 0 0 1 .6.6v16.8a.6.6 0 0 1-.6.6H6a4 4 0 0 1-4-4Z"
      />
      <Path
        fill="currentColor"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6.5 8a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM17.5 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
      />
      <Path
        stroke="currentColor"
        d="M22 17V7a4 4 0 0 0-4-4h-3.9a.6.6 0 0 0-.6.6v16.8a.6.6 0 0 0 .6.6H18a4 4 0 0 0 4-4Z"
      />
    </Svg>
  );
};
const ForwardRef = forwardRef(SvgNintendoSwitch);
export default ForwardRef;
