import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
import { Ref, forwardRef } from "react";
import { IconoirContext } from "./IconoirContext";
const SvgArcade = (passedProps: SvgProps, ref: Ref<Svg>) => {
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
        d="M11 8.5 9.8 9l-7.448 3.386a.6.6 0 0 0-.352.546v.136a.6.6 0 0 0 .352.546l8.82 4.01a2 2 0 0 0 1.656 0l8.82-4.01a.6.6 0 0 0 .352-.546v-.136a.6.6 0 0 0-.352-.546L14.2 9 13 8.5"
      />
      <Path
        stroke="currentColor"
        d="M22 13v4.112a.6.6 0 0 1-.354.547l-8.825 3.972a2 2 0 0 1-1.642 0l-8.825-3.972A.6.6 0 0 1 2 17.112V13"
      />
      <Path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 8a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z"
      />
      <Path stroke="currentColor" d="M11 8v5a1 1 0 1 0 2 0V8" />
      <Path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M16 13h1"
      />
    </Svg>
  );
};
const ForwardRef = forwardRef(SvgArcade);
export default ForwardRef;
