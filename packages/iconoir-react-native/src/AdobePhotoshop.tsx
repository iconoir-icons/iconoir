import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
import { Ref, forwardRef } from "react";
import { IconoirContext } from "./IconoirContext";
const SvgAdobePhotoshop = (passedProps: SvgProps, ref: Ref<Svg>) => {
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
        d="M21 7v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4Z"
      />
      <Path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M7 16v-4m0 0V8h2a2 2 0 0 1 2 2v0a2 2 0 0 1-2 2H7ZM17 11v0c-.306-.613-.933-1-1.618-1H15a1.5 1.5 0 0 0-1.5 1.5v0A1.5 1.5 0 0 0 15 13h.5a1.5 1.5 0 0 1 1.5 1.5v0a1.5 1.5 0 0 1-1.5 1.5h-.382a1.809 1.809 0 0 1-1.618-1v0"
      />
    </Svg>
  );
};
const ForwardRef = forwardRef(SvgAdobePhotoshop);
export default ForwardRef;
