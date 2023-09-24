import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
import { Ref, forwardRef } from "react";
import { IconoirContext } from "./IconoirContext";
const SvgDataTransferWarning = (passedProps: SvgProps, ref: Ref<Svg>) => {
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
        d="M7 4v1M7 9v1M17 12V4m0 0 3 3m-3-3-3 3M20 16v2M20 22.01l.01-.011M7 14v6m0 0 3-3m-3 3-3-3"
      />
    </Svg>
  );
};
const ForwardRef = forwardRef(SvgDataTransferWarning);
export default ForwardRef;
