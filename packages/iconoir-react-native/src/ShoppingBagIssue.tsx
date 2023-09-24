import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
import { Ref, forwardRef } from "react";
import { IconoirContext } from "./IconoirContext";
const SvgShoppingBagIssue = (passedProps: SvgProps, ref: Ref<Svg>) => {
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
        d="m20 14.5-.74-4.804A2 2 0 0 0 17.285 8H6.716a2 2 0 0 0-1.977 1.696l-1.385 9A2 2 0 0 0 5.331 21H12M17.5 17v2M17.5 22.01l.01-.011M14 5a2 2 0 1 0-4 0"
      />
    </Svg>
  );
};
const ForwardRef = forwardRef(SvgShoppingBagIssue);
export default ForwardRef;
