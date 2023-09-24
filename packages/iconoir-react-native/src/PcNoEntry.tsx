import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
import { Ref, forwardRef } from "react";
import { IconoirContext } from "./IconoirContext";
const SvgPcNoEntry = (passedProps: SvgProps, ref: Ref<Svg>) => {
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
        d="M7 22h10"
      />
      <Path
        stroke="currentColor"
        d="M2 17V4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v13a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2Z"
      />
      <Path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M14.857 7.7a4 4 0 1 0-5.713 5.6m5.713-5.6a4 4 0 0 1-5.713 5.6m5.713-5.6-5.714 5.6"
      />
    </Svg>
  );
};
const ForwardRef = forwardRef(SvgPcNoEntry);
export default ForwardRef;
