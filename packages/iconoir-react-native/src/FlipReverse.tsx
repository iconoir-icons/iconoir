import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
import { Ref, forwardRef } from "react";
import { IconoirContext } from "./IconoirContext";
const SvgFlipReverse = (passedProps: SvgProps, ref: Ref<Svg>) => {
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
        d="M9.5 12v2M5.75 12l-.938 2M7.625 20H9.5v-2M3.875 20H2l.938-2M7.625 8 9.5 4v4M14.5 20H22L14.5 4v16Z"
      />
    </Svg>
  );
};
const ForwardRef = forwardRef(SvgFlipReverse);
export default ForwardRef;
