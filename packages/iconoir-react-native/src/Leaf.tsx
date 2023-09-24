import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
import { Ref, forwardRef } from "react";
import { IconoirContext } from "./IconoirContext";
const SvgLeaf = (passedProps: SvgProps, ref: Ref<Svg>) => {
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
        d="M7 21s.5-4.5 4-8.5"
      />
      <Path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m19.13 4.242.594 6.175c.374 3.886-2.54 7.346-6.425 7.72-3.813.367-7.267-2.42-7.634-6.233a6.936 6.936 0 0 1 6.239-7.569l6.571-.632a.6.6 0 0 1 .655.54Z"
      />
    </Svg>
  );
};
const ForwardRef = forwardRef(SvgLeaf);
export default ForwardRef;
