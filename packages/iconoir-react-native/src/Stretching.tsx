import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
import { Ref, forwardRef } from "react";
import { IconoirContext } from "./IconoirContext";
const SvgStretching = (passedProps: SvgProps, ref: Ref<Svg>) => {
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
        d="M16 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM5 20l4.91-.524 2.726-5.238L13.727 9l-4.909 1.048 1.636 2.095M14.818 15.286H17V20"
      />
    </Svg>
  );
};
const ForwardRef = forwardRef(SvgStretching);
export default ForwardRef;
