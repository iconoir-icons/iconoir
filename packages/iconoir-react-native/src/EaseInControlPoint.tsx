import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
import { Ref, forwardRef } from "react";
import { IconoirContext } from "./IconoirContext";
const SvgEaseInControlPoint = (passedProps: SvgProps, ref: Ref<Svg>) => {
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
        d="M3 20c8 0 18-16 18-16M17 20a2 2 0 1 0 4 0 2 2 0 0 0-4 0Zm0 0h-2M12 20h-2"
      />
    </Svg>
  );
};
const ForwardRef = forwardRef(SvgEaseInControlPoint);
export default ForwardRef;
