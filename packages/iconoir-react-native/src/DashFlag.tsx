import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
import { Ref, forwardRef } from "react";
import { IconoirContext } from "./IconoirContext";
const SvgDashFlag = (passedProps: SvgProps, ref: Ref<Svg>) => {
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
        d="m5 15 .95-10.454A.6.6 0 0 1 6.548 4h13.795a.6.6 0 0 1 .598.654l-.891 9.8a.6.6 0 0 1-.598.546H5Zm0 0-.6 6M9 7.5l7 4"
      />
    </Svg>
  );
};
const ForwardRef = forwardRef(SvgDashFlag);
export default ForwardRef;
