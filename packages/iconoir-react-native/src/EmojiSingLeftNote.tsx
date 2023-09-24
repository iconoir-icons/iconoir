import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
import { Ref, forwardRef } from "react";
import { IconoirContext } from "./IconoirContext";
const SvgEmojiSingLeftNote = (passedProps: SvgProps, ref: Ref<Svg>) => {
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
        d="M2.8 8.1a.9.9 0 1 1-1.8 0 .9.9 0 0 1 1.8 0Z"
      />
      <Path
        stroke="currentColor"
        strokeLinecap="round"
        d="M2.8 8.1a.9.9 0 1 1-1.8 0 .9.9 0 0 1 1.8 0Zm0 0V3.6a.6.6 0 0 1 .6-.6H5"
      />
      <Path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M8 17a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"
      />
      <Path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2.05 13c.501 5.053 4.765 9 9.95 9 5.523 0 10-4.477 10-10S17.523 2 12 2a9.966 9.966 0 0 0-4 .832"
      />
      <Path
        fill="currentColor"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15.5 9a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1ZM8.5 9a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Z"
      />
    </Svg>
  );
};
const ForwardRef = forwardRef(SvgEmojiSingLeftNote);
export default ForwardRef;
