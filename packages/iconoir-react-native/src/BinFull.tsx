import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
import { Ref, forwardRef } from "react";
import { IconoirContext } from "./IconoirContext";
const SvgBinFull = (passedProps: SvgProps, ref: Ref<Svg>) => {
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
        d="m19.262 17.038 1.676-12.575a.6.6 0 0 0-.372-.636L16 2h-5.5l-.682 1.5L5 2 3.21 3.79a.6.6 0 0 0-.17.504l1.698 12.744a4 4 0 0 0 1.98 2.944l.32.183a10 10 0 0 0 9.923 0l.32-.183a4 4 0 0 0 1.98-2.944ZM16 2l-2 5M9 6.5l.818-3"
      />
      <Path stroke="currentColor" d="M3 5c2.571 2.667 15.429 2.667 18 0" />
    </Svg>
  );
};
const ForwardRef = forwardRef(SvgBinFull);
export default ForwardRef;
