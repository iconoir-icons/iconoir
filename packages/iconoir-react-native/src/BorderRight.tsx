import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
import { Ref, forwardRef } from "react";
import { IconoirContext } from "./IconoirContext";
const SvgBorderRight = (passedProps: SvgProps, ref: Ref<Svg>) => {
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
        d="m4 20 .01.01M4 16l.01.01M4 12l.01.01M4 8l.01.01M4 4l.01.01M16 4l.01.01M12 4l.01.01M12 12l.01.01M8 4l.01.01M16 20l.01.01M12 20l.01.01M8 20l.01.01M20.01 4v16"
      />
    </Svg>
  );
};
const ForwardRef = forwardRef(SvgBorderRight);
export default ForwardRef;
