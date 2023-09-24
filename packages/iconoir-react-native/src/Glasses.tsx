import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
import { Ref, forwardRef } from "react";
import { IconoirContext } from "./IconoirContext";
const SvgGlasses = (passedProps: SvgProps, ref: Ref<Svg>) => {
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
        d="M2 14a4 4 0 1 0 8 0 4 4 0 0 0-8 0Zm0 0V6M22 14a4 4 0 1 1-8 0 4 4 0 0 1 8 0Zm0 0V6M14 14h-4"
      />
    </Svg>
  );
};
const ForwardRef = forwardRef(SvgGlasses);
export default ForwardRef;
