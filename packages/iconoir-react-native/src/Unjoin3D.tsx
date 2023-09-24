import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
import { Ref, forwardRef } from "react";
import { IconoirContext } from "./IconoirContext";
const SvgUnjoin3D = (passedProps: SvgProps, ref: Ref<Svg>) => {
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
        d="M11.5 7 9 12h6l-2.5 5M20.839 20.84h-3.536m3.536 0v-3.537m0 3.536L17 17M2.768 2.768h3.535m-3.535 0v3.535m0-3.535 3.839 3.839"
      />
    </Svg>
  );
};
const ForwardRef = forwardRef(SvgUnjoin3D);
export default ForwardRef;
