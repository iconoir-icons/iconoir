import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
import { Ref, forwardRef } from "react";
import { IconoirContext } from "./IconoirContext";
const SvgShortPants = (passedProps: SvgProps, ref: Ref<Svg>) => {
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
        d="M12 16.8h6.966a.6.6 0 00.596-.53l1.36-11.6a.6.6 0 00-.596-.67H3.659a.6.6 0 00-.597.656l1.387 14.8a.6.6 0 00.597.544H11.4a.6.6 0 00.6-.6V12"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};
const ForwardRef = forwardRef(SvgShortPants);
export default ForwardRef;
