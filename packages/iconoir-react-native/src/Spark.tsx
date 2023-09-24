import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
import { Ref, forwardRef } from "react";
import { IconoirContext } from "./IconoirContext";
const SvgSpark = (passedProps: SvgProps, ref: Ref<Svg>) => {
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
        strokeLinejoin="round"
        d="M3 12c6.268 0 9-2.637 9-9 0 6.363 2.713 9 9 9-6.287 0-9 2.713-9 9 0-6.287-2.732-9-9-9Z"
      />
    </Svg>
  );
};
const ForwardRef = forwardRef(SvgSpark);
export default ForwardRef;
