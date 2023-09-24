import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
import { Ref, forwardRef } from "react";
import { IconoirContext } from "./IconoirContext";
const SvgDrag = (passedProps: SvgProps, ref: Ref<Svg>) => {
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
        d="M12 12 4 4m0 0v4m0-4h4M12 12l8-8m0 0v4m0-4h-4M12 12l-8 8m0 0v-4m0 4h4M12 12l8 8m0 0v-4m0 4h-4"
      />
    </Svg>
  );
};
const ForwardRef = forwardRef(SvgDrag);
export default ForwardRef;
