import * as React from "react";
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
import { Ref, forwardRef } from "react";
import { IconoirContext } from "./IconoirContext";
const SvgPenConnectBluetooth = (passedProps: SvgProps, ref: Ref<Svg>) => {
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
      <G
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        clipPath="url(#pen-connect-bluetooth_svg__a)"
      >
        <Path d="m6.5 17.5-1 4 3.731-.933a1 1 0 0 0 .465-.263L21.5 8.5a2.121 2.121 0 0 0 0-3v0a2.121 2.121 0 0 0-3 0l-4 4M17.5 6.5l3 3M5 6.6l7 5.1L8.333 15V3L12 6.3l-7 5.1" />
      </G>
      <Defs>
        <ClipPath id="pen-connect-bluetooth_svg__a">
          <Path fill="#fff" d="M0 0h24v24H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};
const ForwardRef = forwardRef(SvgPenConnectBluetooth);
export default ForwardRef;
