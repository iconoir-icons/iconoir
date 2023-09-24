import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
import { Ref, forwardRef } from "react";
import { IconoirContext } from "./IconoirContext";
const SvgHomeShield = (passedProps: SvgProps, ref: Ref<Svg>) => {
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
        d="m12.502 9.13 2.049.531c.264.069.45.309.441.582C14.826 15.232 12 16 12 16s-2.826-.768-2.992-5.757a.584.584 0 0 1 .441-.582l2.05-.53a2 2 0 0 1 1.003 0ZM2 8l9.732-4.866a.6.6 0 0 1 .536 0L22 8"
      />
      <Path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M20 11v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8"
      />
    </Svg>
  );
};
const ForwardRef = forwardRef(SvgHomeShield);
export default ForwardRef;
