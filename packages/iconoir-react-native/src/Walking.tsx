import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
import { Ref, forwardRef } from "react";
import { IconoirContext } from "./IconoirContext";
const SvgWalking = (passedProps: SvgProps, ref: Ref<Svg>) => {
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
        d="m12.44 9.127-1.408 5.635 4.93 6.339M10.328 18.284 8.215 21.1"
      />
      <Path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M8.215 13.353c0-3.944 2.817-4.226 4.226-4.226h1.408c.235 1.174 1.268 3.663 3.522 4.226M13 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"
      />
    </Svg>
  );
};
const ForwardRef = forwardRef(SvgWalking);
export default ForwardRef;
