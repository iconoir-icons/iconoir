import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
import { Ref, forwardRef } from "react";
import { IconoirContext } from "./IconoirContext";
const SvgPineTree = (passedProps: SvgProps, ref: Ref<Svg>) => {
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
        d="M12 2 7 6.643S10.042 7 12 7c1.958 0 5-.357 5-.357L12 2ZM8.5 7 5 10.94S7.625 12 12 12s7-1.06 7-1.06L15.5 7"
      />
      <Path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6.5 11.5 3 15.523S5.7 18 12 18s9-2.477 9-2.477L17.5 11.5M12 22v-3"
      />
    </Svg>
  );
};
const ForwardRef = forwardRef(SvgPineTree);
export default ForwardRef;
