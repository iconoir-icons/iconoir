import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
import { Ref, forwardRef } from "react";
import { IconoirContext } from "./IconoirContext";
const SvgShop = (passedProps: SvgProps, ref: Ref<Svg>) => {
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
        d="M3 9v10a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V9"
      />
      <Path
        stroke="currentColor"
        d="M20.485 3h-3.992l.5 5s1 1 2.5 1a3.23 3.23 0 0 0 2.139-.806.503.503 0 0 0 .15-.465L21.076 3.5A.6.6 0 0 0 20.485 3Z"
      />
      <Path
        stroke="currentColor"
        d="m16.493 3 .5 5s-1 1-2.5 1-2.5-1-2.5-1V3h4.5Z"
      />
      <Path
        stroke="currentColor"
        d="M11.993 3v5s-1 1-2.5 1-2.5-1-2.5-1l.5-5h4.5Z"
      />
      <Path
        stroke="currentColor"
        d="M7.493 3H3.502a.6.6 0 0 0-.592.501L2.205 7.73c-.029.172.02.349.15.465.328.29 1.061.806 2.138.806 1.5 0 2.5-1 2.5-1l.5-5Z"
      />
    </Svg>
  );
};
const ForwardRef = forwardRef(SvgShop);
export default ForwardRef;
