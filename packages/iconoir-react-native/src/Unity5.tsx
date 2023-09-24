import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
import { Ref, forwardRef } from "react";
import { IconoirContext } from "./IconoirContext";
const SvgUnity5 = (passedProps: SvgProps, ref: Ref<Svg>) => {
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
        d="M11.672 20.786a.6.6 0 0 0 .656 0l9.284-6.062a.6.6 0 0 0 .24-.694L18.285 3.41A.6.6 0 0 0 17.716 3H6.221a.6.6 0 0 0-.57.412l-3.506 10.62a.6.6 0 0 0 .241.69l9.286 6.064Z"
      />
      <Path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M14.5 6H10l-.5 5a3 3 0 1 1 0 3"
      />
    </Svg>
  );
};
const ForwardRef = forwardRef(SvgUnity5);
export default ForwardRef;
