import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
import { Ref, forwardRef } from "react";
import { IconoirContext } from "./IconoirContext";
const SvgHourglass = (passedProps: SvgProps, ref: Ref<Svg>) => {
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
        d="M12 12a7 7 0 0 0 7-7H5a7 7 0 0 0 7 7Zm0 0a7 7 0 0 1 7 7H5a7 7 0 0 1 7-7ZM5 2h14M5 22h14"
      />
    </Svg>
  );
};
const ForwardRef = forwardRef(SvgHourglass);
export default ForwardRef;
