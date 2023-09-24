import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
import { Ref, forwardRef } from "react";
import { IconoirContext } from "./IconoirContext";
const Svg3DEllipseThreePts = (passedProps: SvgProps, ref: Ref<Svg>) => {
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
        d="M5 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
      />
      <Path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M5 22h8M5 22V2"
      />
      <Path
        fill="currentColor"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M5 23a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
      />
      <Path
        stroke="currentColor"
        strokeDasharray="3 3"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M8 4.193C9.37 2.821 11.108 2 13 2c4.418 0 8 4.477 8 10 0 3.271-1.256 6.175-3.2 8"
      />
      <Path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M8.2 20A9.098 9.098 0 0 1 7 18.615"
      />
      <Path
        fill="currentColor"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M13 23a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
      />
    </Svg>
  );
};
const ForwardRef = forwardRef(Svg3DEllipseThreePts);
export default ForwardRef;
