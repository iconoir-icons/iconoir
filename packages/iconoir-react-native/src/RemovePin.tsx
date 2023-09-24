import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
import { Ref, forwardRef } from "react";
import { IconoirContext } from "./IconoirContext";
const SvgRemovePin = (passedProps: SvgProps, ref: Ref<Svg>) => {
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
        d="M9.5 14.5 3 21M7.676 7.89l-.979-.102L5 9.485l9.193 9.193 1.697-1.697-.102-.981m-4.303-9 3.672-4.329 5.85 5.85-4.308 3.654M3 3l18 18"
      />
    </Svg>
  );
};
const ForwardRef = forwardRef(SvgRemovePin);
export default ForwardRef;
