import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
import { Ref, forwardRef } from "react";
import { IconoirContext } from "./IconoirContext";
const SvgMap = (passedProps: SvgProps, ref: Ref<Svg>) => {
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
        d="m9 19-5.21 1.737a.6.6 0 0 1-.79-.57V5.433a.6.6 0 0 1 .41-.569L9 3m0 16 6 2m-6-2V3m6 18 5.59-1.863a.6.6 0 0 0 .41-.57V3.832a.6.6 0 0 0-.79-.569L15 5m0 16V5m0 0L9 3"
      />
    </Svg>
  );
};
const ForwardRef = forwardRef(SvgMap);
export default ForwardRef;
