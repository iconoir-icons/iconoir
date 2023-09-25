import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
import { Ref, forwardRef } from "react";
import { IconoirContext } from "./IconoirContext";
const SvgAppleMac = (passedProps: SvgProps, ref: Ref<Svg>) => {
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
        d="M16 2c.363 2.18-1.912 3.83-3.184 4.571-.375.219-.799-.06-.734-.489C12.299 4.64 13.094 2 16 2Z"
      />
      <Path
        stroke="currentColor"
        d="M9 6.5c.897 0 1.69.2 2.294.42.762.279 1.65.279 2.412 0A6.73 6.73 0 0 1 16 6.5c1.085 0 2.465.589 3.5 1.767C16 11 17 15.5 20.269 16.692c-1.044 2.867-3.028 4.808-4.77 4.808-1.5 0-1.499-.7-2.999-.7s-1.5.7-3 .7c-2.5 0-5.5-4-5.5-9 0-4 3-6 5-6Z"
      />
    </Svg>
  );
};
const ForwardRef = forwardRef(SvgAppleMac);
export default ForwardRef;
