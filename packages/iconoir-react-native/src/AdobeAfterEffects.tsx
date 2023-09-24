import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
import { Ref, forwardRef } from "react";
import { IconoirContext } from "./IconoirContext";
const SvgAdobeAfterEffects = (passedProps: SvgProps, ref: Ref<Svg>) => {
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
        d="M14 13v-1a2 2 0 0 1 2-2v0a2 2 0 0 1 2 2v1h-4Zm0 0v1a2 2 0 0 0 2 2h1.5M6 16l1.125-3M12 16l-1.125-3m-3.75 0L9 8l1.875 5m-3.75 0h3.75"
      />
    </Svg>
  );
};
const ForwardRef = forwardRef(SvgAdobeAfterEffects);
export default ForwardRef;
