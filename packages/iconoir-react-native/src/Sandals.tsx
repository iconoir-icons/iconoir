import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
import { Ref, forwardRef } from "react";
import { IconoirContext } from "./IconoirContext";
const SvgSandals = (passedProps: SvgProps, ref: Ref<Svg>) => {
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
        d="M22 7s.5-4-4-4-4 4-4 4m8 0h-8m8 0-.214 3M14 7l.214 3m7.572 0-.587 8.214A3 3 0 0 1 18.207 21h-.414a3 3 0 0 1-2.992-2.786L14.214 10m7.572 0h-7.572M10 7s.5-4-4-4-4 4-4 4m8 0H2m8 0-.214 3M2 7l.214 3m7.572 0-.587 8.214A3 3 0 0 1 6.207 21h-.414a3 3 0 0 1-2.992-2.786L2.214 10m7.572 0H2.214"
      />
    </Svg>
  );
};
const ForwardRef = forwardRef(SvgSandals);
export default ForwardRef;
