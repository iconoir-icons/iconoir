import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
import { Ref, forwardRef } from "react";
import { IconoirContext } from "./IconoirContext";
const SvgEcologyBook = (passedProps: SvgProps, ref: Ref<Svg>) => {
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
        d="M4 19V5a2 2 0 0 1 2-2h13.4a.6.6 0 0 1 .6.6v13.114"
      />
      <Path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M10 14s.9-3.118 3-5"
      />
      <Path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m12.802 12.425-.134.012a3.094 3.094 0 0 1-3.366-2.774 3.06 3.06 0 0 1 2.761-3.35l2.986-.28a.35.35 0 0 1 .381.314l.255 2.58a3.194 3.194 0 0 1-2.883 3.498Z"
      />
      <Path stroke="currentColor" strokeLinecap="round" d="M6 17h14M6 21h14" />
      <Path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6 21a2 2 0 1 1 0-4"
      />
    </Svg>
  );
};
const ForwardRef = forwardRef(SvgEcologyBook);
export default ForwardRef;
