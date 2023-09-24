import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
import { Ref, forwardRef } from "react";
import { IconoirContext } from "./IconoirContext";
const SvgAlignRightBox = (passedProps: SvgProps, ref: Ref<Svg>) => {
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
        d="m8.006 20.005.01-.01M4.006 20.005l.01-.01M4.006 16.005l.01-.01M4.006 12.005l.01-.01M4.006 8.005l.01-.01M4.006 4.005l.01-.01M8.006 4.005l.01-.01M12.006 20.005h8v-16h-8v16Z"
      />
    </Svg>
  );
};
const ForwardRef = forwardRef(SvgAlignRightBox);
export default ForwardRef;
