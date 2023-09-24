import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
import { Ref, forwardRef } from "react";
import { IconoirContext } from "./IconoirContext";
const SvgTree = (passedProps: SvgProps, ref: Ref<Svg>) => {
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
        d="M12 22v-8m0-4v4m0 0 4-2M17 7A5 5 0 0 0 7 7M12 18H7.5a5.5 5.5 0 1 1 0-11H9M12 18h4.5A5.5 5.5 0 0 0 17 7.022"
      />
    </Svg>
  );
};
const ForwardRef = forwardRef(SvgTree);
export default ForwardRef;
