import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
import { Ref, forwardRef } from "react";
import { IconoirContext } from "./IconoirContext";
const SvgWaist = (passedProps: SvgProps, ref: Ref<Svg>) => {
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
        d="M18.4 4s-1.6 3.75-1.6 6.857c0 .995.34 1.827.8 2.656.528.954 1.214 1.903 1.717 3.09.399.943.683 2.034.683 3.397M5.6 4s1.6 3.75 1.6 6.857c0 .995-.34 1.827-.8 2.656-.528.954-1.214 1.903-1.717 3.09A8.483 8.483 0 0 0 4 20M6.4 13.513h11.2"
      />
      <Path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4.683 16.604S10.4 17.713 12 20c1.6-2.286 7.317-3.396 7.317-3.396"
      />
    </Svg>
  );
};
const ForwardRef = forwardRef(SvgWaist);
export default ForwardRef;
