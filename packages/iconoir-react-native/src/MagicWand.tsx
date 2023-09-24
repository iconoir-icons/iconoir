import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
import { Ref, forwardRef } from "react";
import { IconoirContext } from "./IconoirContext";
const SvgMagicWand = (passedProps: SvgProps, ref: Ref<Svg>) => {
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
        d="m3 21 10-10m5-5-2.5 2.5"
      />
      <Path
        stroke="currentColor"
        strokeLinejoin="round"
        d="m9.5 2 .945 2.555L13 5.5l-2.555.945L9.5 9l-.945-2.555L6 5.5l2.555-.945L9.5 2ZM19 10l.54 1.46L21 12l-1.46.54L19 14l-.54-1.46L17 12l1.46-.54L19 10Z"
      />
    </Svg>
  );
};
const ForwardRef = forwardRef(SvgMagicWand);
export default ForwardRef;
