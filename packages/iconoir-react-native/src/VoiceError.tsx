import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
import { Ref, forwardRef } from "react";
import { IconoirContext } from "./IconoirContext";
const SvgVoiceError = (passedProps: SvgProps, ref: Ref<Svg>) => {
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
        d="M12 3v16M8 8v6M20 9v4M4 9v4M16 6v8M16.121 21.364l2.122-2.121m0 0 2.121-2.122m-2.121 2.122L16.12 17.12m2.122 2.122 2.121 2.121"
      />
    </Svg>
  );
};
const ForwardRef = forwardRef(SvgVoiceError);
export default ForwardRef;
