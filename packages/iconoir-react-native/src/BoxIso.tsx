import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
import { Ref, forwardRef } from "react";
import { IconoirContext } from "./IconoirContext";
const SvgBoxIso = (passedProps: SvgProps, ref: Ref<Svg>) => {
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
        fill="currentColor"
        d="m2.695 7.185 9 4 .61-1.37-9-4-.61 1.37ZM12.75 21.5v-11h-1.5v11h1.5Zm-.445-10.315 9-4-.61-1.37-9 4 .61 1.37Z"
      />
      <Path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 17.11V6.89a.6.6 0 0 1 .356-.548l8.4-3.734a.6.6 0 0 1 .488 0l8.4 3.734A.6.6 0 0 1 21 6.89v10.22a.6.6 0 0 1-.356.548l-8.4 3.734a.6.6 0 0 1-.488 0l-8.4-3.734A.6.6 0 0 1 3 17.11Z"
      />
      <Path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m7.5 4.5 8.644 3.842a.6.6 0 0 1 .356.548v3.61"
      />
    </Svg>
  );
};
const ForwardRef = forwardRef(SvgBoxIso);
export default ForwardRef;
