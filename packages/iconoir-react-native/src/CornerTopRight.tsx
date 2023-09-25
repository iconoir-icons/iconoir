import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
import { Ref, forwardRef } from "react";
import { IconoirContext } from "./IconoirContext";
const SvgCornerTopRight = (passedProps: SvgProps, ref: Ref<Svg>) => {
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
        d="m20.01 16.01-.01-.011M20.01 20.01l-.01-.011M16.01 20.01l-.01-.011M12.01 20.01l-.01-.011M8.01 20.01 8 19.999M4.01 20.01 4 19.999M4.01 16.01 4 15.999M4.01 12.01 4 11.999M4.01 8.01 4 7.999M4.01 4.01 4 3.999M8.01 4.01 8 3.999M20.01 12V4h-8v8h8Z"
      />
    </Svg>
  );
};
const ForwardRef = forwardRef(SvgCornerTopRight);
export default ForwardRef;
