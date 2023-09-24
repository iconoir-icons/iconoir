import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
import { Ref, forwardRef } from "react";
import { IconoirContext } from "./IconoirContext";
const SvgVials = (passedProps: SvgProps, ref: Ref<Svg>) => {
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
        d="M21 21H3M9 12H5M19 12h-4M7 18a2 2 0 0 1-2-2V3h4v13a2 2 0 0 1-2 2ZM17 18a2 2 0 0 1-2-2V3h4v13a2 2 0 0 1-2 2Z"
      />
    </Svg>
  );
};
const ForwardRef = forwardRef(SvgVials);
export default ForwardRef;
