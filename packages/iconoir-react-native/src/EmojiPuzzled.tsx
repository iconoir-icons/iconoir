import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
import { Ref, forwardRef } from "react";
import { IconoirContext } from "./IconoirContext";
const SvgEmojiPuzzled = (passedProps: SvgProps, ref: Ref<Svg>) => {
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
        d="M2 12c0 5.523 4.477 10 10 10s10-4.477 10-10S17.523 2 12 2"
      />
      <Path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M11.5 15.5s1.5-2 4.5-2 4.5 2 4.5 2M3 4c0-2.754 4-2.754 4 0 0 1.967-2 1.64-2 4M5 11.01l.01-.011"
      />
      <Path
        fill="#000"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M17.5 9a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1ZM10.5 9a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1Z"
      />
    </Svg>
  );
};
const ForwardRef = forwardRef(SvgEmojiPuzzled);
export default ForwardRef;
