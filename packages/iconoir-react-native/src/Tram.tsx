import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
import { Ref, forwardRef } from "react";
import { IconoirContext } from "./IconoirContext";
const SvgTram = (passedProps: SvgProps, ref: Ref<Svg>) => {
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
        d="m15 16.01.01-.011M9 16.01l.01-.011M13 6h2a5 5 0 0 1 5 5v7a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-7a5 5 0 0 1 5-5h4Zm0 0 1-4m0 0h3m-3 0H7"
      />
      <Path
        stroke="currentColor"
        strokeLinecap="round"
        d="m10.5 20-2 2.5M13.5 20l2 2.5M16.5 20l2 2.5M7.5 20l-2 2.5"
      />
      <Path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9.609 9h4.782A2.609 2.609 0 0 1 17 11.609a.391.391 0 0 1-.391.391H7.39A.391.391 0 0 1 7 11.609 2.609 2.609 0 0 1 9.609 9Z"
      />
    </Svg>
  );
};
const ForwardRef = forwardRef(SvgTram);
export default ForwardRef;
