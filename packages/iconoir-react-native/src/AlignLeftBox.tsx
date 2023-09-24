import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
import { Ref, forwardRef } from "react";
import { IconoirContext } from "./IconoirContext";
const SvgAlignLeftBox = (passedProps: SvgProps, ref: Ref<Svg>) => {
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
        d="m16.004 3.995-.011.01M20.004 3.995l-.011.01M20.004 7.995l-.011.01M20.004 11.995l-.011.01M20.004 15.995l-.011.01M20.004 19.995l-.011.01M16.004 19.995l-.011.01M12.006 3.995h-8v16h8v-16Z"
      />
    </Svg>
  );
};
const ForwardRef = forwardRef(SvgAlignLeftBox);
export default ForwardRef;
