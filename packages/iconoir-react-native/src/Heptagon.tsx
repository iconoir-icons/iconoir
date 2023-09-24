import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
import { Ref, forwardRef } from "react";
import { IconoirContext } from "./IconoirContext";
const SvgHeptagon = (passedProps: SvgProps, ref: Ref<Svg>) => {
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
        d="M11.74 1.625a.6.6 0 0 1 .52 0l8.08 3.891a.6.6 0 0 1 .324.407l1.996 8.743a.6.6 0 0 1-.116.508l-5.591 7.01a.6.6 0 0 1-.47.227H7.517a.6.6 0 0 1-.469-.226l-5.591-7.011a.6.6 0 0 1-.116-.508l1.996-8.743a.6.6 0 0 1 .324-.407l8.08-3.89Z"
      />
    </Svg>
  );
};
const ForwardRef = forwardRef(SvgHeptagon);
export default ForwardRef;
