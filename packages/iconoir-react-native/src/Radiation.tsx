import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
import { Ref, forwardRef } from "react";
import { IconoirContext } from "./IconoirContext";
const SvgRadiation = (passedProps: SvgProps, ref: Ref<Svg>) => {
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
        d="M17 20.662a9.955 9.955 0 0 1-5 1.337 9.954 9.954 0 0 1-5-1.337L10 16s1 .4 2 .4 2-.4 2-.4l3 4.662ZM16.998 3.339A9.954 9.954 0 0 1 20.656 7a9.954 9.954 0 0 1 1.342 5l-5.537-.268s-.154-1.066-.654-1.932c-.5-.866-1.346-1.532-1.346-1.532l2.537-4.93ZM1.998 12A9.954 9.954 0 0 1 3.34 7a9.954 9.954 0 0 1 3.658-3.66l2.537 4.928S8.69 8.934 8.19 9.8c-.5.866-.654 1.932-.654 1.932L1.998 12ZM12 14a2 2 0 1 1 0-4 2 2 0 0 1 0 4Z"
      />
    </Svg>
  );
};
const ForwardRef = forwardRef(SvgRadiation);
export default ForwardRef;
