import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
import { Ref, forwardRef } from "react";
import { IconoirContext } from "./IconoirContext";
const SvgTruckLength = (passedProps: SvgProps, ref: Ref<Svg>) => {
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
        d="M7 16a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM17 16a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"
      />
      <Path
        stroke="currentColor"
        strokeLinecap="round"
        d="M14 14V3.6a.6.6 0 0 0-.6-.6H2.6a.6.6 0 0 0-.6.6v9.8a.6.6 0 0 0 .6.6h2.05M14 14H9.05M14 6h5.61a.6.6 0 0 1 .548.356l1.79 4.028a.6.6 0 0 1 .052.243V13.4a.6.6 0 0 1-.6.6h-1.9M14 14h1"
      />
      <Path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 20h17.75M3 20l1.75 1.75M3 20l1.75-1.75m16 1.75L19 21.75M20.75 20 19 18.25"
      />
    </Svg>
  );
};
const ForwardRef = forwardRef(SvgTruckLength);
export default ForwardRef;
