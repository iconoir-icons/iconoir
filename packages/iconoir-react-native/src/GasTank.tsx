import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
import { Ref, forwardRef } from "react";
import { IconoirContext } from "./IconoirContext";
const SvgGasTank = (passedProps: SvgProps, ref: Ref<Svg>) => {
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
        strokeMiterlimit={1.5}
        d="M3 7.562A2.562 2.562 0 0 1 5.563 5H7V3h5v2h2.002A6.998 6.998 0 0 1 21 11.998v6.442a2.562 2.562 0 0 1-2.563 2.562H5.563A2.565 2.565 0 0 1 3 18.44V7.562Z"
        clipRule="evenodd"
      />
      <Path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={1.5}
        d="m8 8.878 8 8.238-4-4.121-4 4.12 4-4.12 4-4.121"
      />
    </Svg>
  );
};
const ForwardRef = forwardRef(SvgGasTank);
export default ForwardRef;
