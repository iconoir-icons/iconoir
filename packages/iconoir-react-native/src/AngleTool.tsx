import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
import { Ref, forwardRef } from "react";
import { IconoirContext } from "./IconoirContext";
const SvgAngleTool = (passedProps: SvgProps, ref: Ref<Svg>) => {
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
        d="M3 21V3h6v12h12v6H3Z"
      />
      <Path
        stroke="currentColor"
        strokeLinecap="round"
        d="M13 19v2M9 19v2M3 7h2M3 11h2M3 15h2M17 19v2"
      />
    </Svg>
  );
};
const ForwardRef = forwardRef(SvgAngleTool);
export default ForwardRef;
