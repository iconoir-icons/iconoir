import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
import { Ref, forwardRef } from "react";
import { IconoirContext } from "./IconoirContext";
const SvgPodcast = (passedProps: SvgProps, ref: Ref<Svg>) => {
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
        d="M6 19a9.985 9.985 0 0 1-4-8C2 5.477 6.477 1 12 1s10 4.477 10 10a9.985 9.985 0 0 1-4 8"
      />
      <Path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6 19a9.985 9.985 0 0 1-4-8C2 5.477 6.477 1 12 1s10 4.477 10 10a9.985 9.985 0 0 1-4 8"
      />
      <Path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M7.528 15a6 6 0 1 1 8.944 0"
      />
      <Path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 13a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM10.076 16.283l.815-.543a2 2 0 0 1 2.218 0l.815.543a2 2 0 0 1 .863 1.993l-.509 3.053A2 2 0 0 1 12.306 23h-.612a2 2 0 0 1-1.973-1.671l-.508-3.053a2 2 0 0 1 .863-1.993Z"
      />
    </Svg>
  );
};
const ForwardRef = forwardRef(SvgPodcast);
export default ForwardRef;
