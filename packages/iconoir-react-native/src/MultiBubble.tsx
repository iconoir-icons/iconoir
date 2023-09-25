import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
import { Ref, forwardRef } from "react";
import { IconoirContext } from "./IconoirContext";
const SvgMultiBubble = (passedProps: SvgProps, ref: Ref<Svg>) => {
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
        d="M7.5 22a5.5 5.5 0 1 0-4.764-2.75l-.461 2.475 2.475-.46A5.474 5.474 0 0 0 7.5 22Z"
      />
      <Path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15.282 17.898A7.946 7.946 0 0 0 18 16.93l3.6.67-.67-3.6A8 8 0 1 0 6.083 8.849"
      />
    </Svg>
  );
};
const ForwardRef = forwardRef(SvgMultiBubble);
export default ForwardRef;
