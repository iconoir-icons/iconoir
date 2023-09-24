import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
import { Ref, forwardRef } from "react";
import { IconoirContext } from "./IconoirContext";
const SvgAppleWallet = (passedProps: SvgProps, ref: Ref<Svg>) => {
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
        d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2Z"
      />
      <Path
        stroke="currentColor"
        d="M3 15h6.4c.331 0 .605.278.75.576.206.423.694.924 1.85.924 1.156 0 1.644-.5 1.85-.924.145-.298.419-.576.75-.576H21M3 7h18M3 11h18"
      />
    </Svg>
  );
};
const ForwardRef = forwardRef(SvgAppleWallet);
export default ForwardRef;
