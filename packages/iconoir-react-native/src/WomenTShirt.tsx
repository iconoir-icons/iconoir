import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
import { Ref, forwardRef } from "react";
import { IconoirContext } from "./IconoirContext";
const SvgWomenTShirt = (passedProps: SvgProps, ref: Ref<Svg>) => {
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
        d="M18 21H6s1.66-4.825 1.5-8c-.1-1.989-1.524-3.079-1-5 .23-.842 1-2 1-2S9 7 12 7s4.5-1 4.5-1 .77 1.158 1 2c.524 1.921-.9 3.011-1 5-.16 3.175 1.5 8 1.5 8ZM7.5 6V3M16.5 6V3"
      />
    </Svg>
  );
};
const ForwardRef = forwardRef(SvgWomenTShirt);
export default ForwardRef;
