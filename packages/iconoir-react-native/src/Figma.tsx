import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
import { Ref, forwardRef } from "react";
import { IconoirContext } from "./IconoirContext";
const SvgFigma = (passedProps: SvgProps, ref: Ref<Svg>) => {
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
        d="M6 6a3 3 0 0 1 3-3h3v6H9a3 3 0 0 1-3-3ZM12 3h3a3 3 0 0 1 0 6h-3V3Z"
      />
      <Path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 12a3 3 0 1 1 6 0 3 3 0 0 1-6 0v0ZM6 18a3 3 0 0 1 3-3h3v3a3 3 0 0 1-6 0ZM6 12a3 3 0 0 1 3-3h3v6H9a3 3 0 0 1-3-3Z"
      />
    </Svg>
  );
};
const ForwardRef = forwardRef(SvgFigma);
export default ForwardRef;
