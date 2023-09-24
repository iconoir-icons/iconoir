import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
import { Ref, forwardRef } from "react";
import { IconoirContext } from "./IconoirContext";
const SvgCpu = (passedProps: SvgProps, ref: Ref<Svg>) => {
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
        d="M8 15.4V8.6a.6.6 0 0 1 .6-.6h6.8a.6.6 0 0 1 .6.6v6.8a.6.6 0 0 1-.6.6H8.6a.6.6 0 0 1-.6-.6Z"
      />
      <Path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M20 4.6v14.8a.6.6 0 0 1-.6.6H4.6a.6.6 0 0 1-.6-.6V4.6a.6.6 0 0 1 .6-.6h14.8a.6.6 0 0 1 .6.6ZM17 4V2M12 4V2M7 4V2M7 20v2M12 20v2M17 20v2M20 17h2M20 12h2M20 7h2M4 17H2M4 12H2M4 7H2"
      />
    </Svg>
  );
};
const ForwardRef = forwardRef(SvgCpu);
export default ForwardRef;
