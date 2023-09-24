import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
import { Ref, forwardRef } from "react";
import { IconoirContext } from "./IconoirContext";
const SvgSpockHandGesture = (passedProps: SvgProps, ref: Ref<Svg>) => {
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
        d="m18 7.5.919.153a2 2 0 0 1 1.623 2.407l-.528 2.376a.602.602 0 0 0-.014.13V17.5s0 0 0 0c0 2-1.6 4-4 4H9.42a2 2 0 0 1-1.519-.698l-4.548-5.307a1.582 1.582 0 0 1-.034-2.018v0a1.582 1.582 0 0 1 2.426-.054L8 16v-3.5"
      />
      <Path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m9 5-.79.132a2 2 0 0 0-1.595 2.522L8 12.5M11 12.5 8.923 4.606a1.514 1.514 0 0 1 1.215-1.879v0a1.514 1.514 0 0 1 1.713 1.108L14 12M17 12.5l1-5 .247-1.485a1.536 1.536 0 0 0-1.262-1.768v0a1.536 1.536 0 0 0-1.762 1.233L14 12"
      />
    </Svg>
  );
};
const ForwardRef = forwardRef(SvgSpockHandGesture);
export default ForwardRef;
