import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
import { Ref, forwardRef } from "react";
import { IconoirContext } from "./IconoirContext";
const SvgHammer = (passedProps: SvgProps, ref: Ref<Svg>) => {
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
        d="M10.634 11.056 2.148 19.54l2.122 2.121 8.485-8.485"
      />
      <Path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m10.634 11.056 1.414-1.415s.354-3.182-3.182-6.717l1.06-1.06 8.486 5.656-1.06 1.06 1.413 1.415 1.061-1.06 2.475 2.474-4.95 4.95-2.475-2.475 1.061-1.06-1.414-1.415-1.768 1.768-2.121-2.121Z"
      />
    </Svg>
  );
};
const ForwardRef = forwardRef(SvgHammer);
export default ForwardRef;
