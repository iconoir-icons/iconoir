import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
import { Ref, forwardRef } from "react";
import { IconoirContext } from "./IconoirContext";
const SvgStackoverflow = (passedProps: SvgProps, ref: Ref<Svg>) => {
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
        d="M19 15v6H5v-6M16 17H8M15.913 14.663 8.087 13M16.713 12.38 9.463 9M18.173 10.642 12.044 5.5M20.034 8.804 15.109 2.5"
      />
    </Svg>
  );
};
const ForwardRef = forwardRef(SvgStackoverflow);
export default ForwardRef;
