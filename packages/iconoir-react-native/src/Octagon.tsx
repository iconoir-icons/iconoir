import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
import { Ref, forwardRef } from "react";
import { IconoirContext } from "./IconoirContext";
const SvgOctagon = (passedProps: SvgProps, ref: Ref<Svg>) => {
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
        d="M11.77 1.095a.6.6 0 0 1 .46 0l7.319 3.032a.6.6 0 0 1 .324.324l3.032 7.32a.6.6 0 0 1 0 .459l-3.032 7.319a.6.6 0 0 1-.324.324l-7.32 3.032a.6.6 0 0 1-.459 0l-7.319-3.032a.6.6 0 0 1-.324-.324l-3.032-7.32a.6.6 0 0 1 0-.459l3.032-7.319a.6.6 0 0 1 .324-.324l7.32-3.032Z"
      />
    </Svg>
  );
};
const ForwardRef = forwardRef(SvgOctagon);
export default ForwardRef;
