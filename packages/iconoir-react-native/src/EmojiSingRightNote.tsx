import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
import { Ref, forwardRef } from "react";
import { IconoirContext } from "./IconoirContext";
const SvgEmojiSingRightNote = (passedProps: SvgProps, ref: Ref<Svg>) => {
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
        d="M20.8 8.1a.9.9 0 1 1-1.8 0 .9.9 0 0 1 1.8 0Z"
      />
      <Path
        stroke="currentColor"
        strokeLinecap="round"
        d="M20.8 8.1a.9.9 0 1 1-1.8 0 .9.9 0 0 1 1.8 0Zm0 0V3.6a.6.6 0 0 1 .6-.6H23"
      />
      <Path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M16 17a2 2 0 1 1 0-4 2 2 0 0 1 0 4Z"
      />
      <Path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21.95 13c-.501 5.053-4.765 9-9.95 9-5.523 0-10-4.477-10-10S6.477 2 12 2c1.422 0 2.775.297 4 .832"
      />
      <Path
        fill="currentColor"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M8.5 9a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1ZM15.5 9a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1Z"
      />
    </Svg>
  );
};
const ForwardRef = forwardRef(SvgEmojiSingRightNote);
export default ForwardRef;
