import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
import { Ref, forwardRef } from "react";
import { IconoirContext } from "./IconoirContext";
const SvgHospital = (passedProps: SvgProps, ref: Ref<Svg>) => {
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
        d="M6.4 8a.6.6 0 0 0 .6-.6V3.6a.6.6 0 0 1 .6-.6h8.8a.6.6 0 0 1 .6.6v3.8a.6.6 0 0 0 .6.6h1.8a.6.6 0 0 1 .6.6v11.8a.6.6 0 0 1-.6.6H4.6a.6.6 0 0 1-.6-.6V8.6a.6.6 0 0 1 .6-.6h1.8Z"
      />
      <Path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9.992 8h2m2 0h-2m0 0V6m0 2v2M16 17.01l.01-.011M16 13.01l.01-.011M12 13.01l.01-.011M8 13.01l.01-.011M8 17.01l.01-.011M12 17.01l.01-.011"
      />
    </Svg>
  );
};
const ForwardRef = forwardRef(SvgHospital);
export default ForwardRef;
