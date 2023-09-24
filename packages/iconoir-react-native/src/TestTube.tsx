import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
import { Ref, forwardRef } from "react";
import { IconoirContext } from "./IconoirContext";
const SvgTestTube = (passedProps: SvgProps, ref: Ref<Svg>) => {
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
        d="M6.141 19.995c2.458 1.72 4.281-.012 5.318-1.492l7.3-10.426 1.966-1.065-6.553-4.588-8.447 12.064c-1.037 1.48-2.041 3.786.416 5.507Z"
      />
      <Path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M16.091 11.02c-2.876-.853-4.403.781-7.28-.071"
      />
    </Svg>
  );
};
const ForwardRef = forwardRef(SvgTestTube);
export default ForwardRef;
