import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
import { Ref, forwardRef } from "react";
import { IconoirContext } from "./IconoirContext";
const SvgDirectorChair = (passedProps: SvgProps, ref: Ref<Svg>) => {
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
        d="M19 12 5 21M5 3v9M19 3v9M5 12l14 9M4 12h16"
      />
      <Path stroke="currentColor" strokeLinejoin="round" d="M5 4h14M5 7h14" />
    </Svg>
  );
};
const ForwardRef = forwardRef(SvgDirectorChair);
export default ForwardRef;
