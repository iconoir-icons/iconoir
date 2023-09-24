import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
import { Ref, forwardRef } from "react";
import { IconoirContext } from "./IconoirContext";
const SvgRocket = (passedProps: SvgProps, ref: Ref<Svg>) => {
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
        d="M16.061 10.404 14 17h-4l-2.061-6.596a6 6 0 0 1 .998-5.484l2.59-3.315a.6.6 0 0 1 .946 0l2.59 3.315a6 6 0 0 1 .998 5.484ZM10 20c0 2 2 3 2 3s2-1 2-3M8.5 12.5C5 15 7 19 7 19l3-2M15.931 12.5c3.5 2.5 1.5 6.5 1.5 6.5l-3-2"
      />
      <Path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 11a2 2 0 1 1 0-4 2 2 0 0 1 0 4Z"
      />
    </Svg>
  );
};
const ForwardRef = forwardRef(SvgRocket);
export default ForwardRef;
