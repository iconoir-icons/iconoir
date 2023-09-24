import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
import { Ref, forwardRef } from "react";
import { IconoirContext } from "./IconoirContext";
const SvgGoogleDrive = (passedProps: SvgProps, ref: Ref<Svg>) => {
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
        d="M9.143 3.004 14.857 3m-5.714.004L2 15.004m7.143-12L18.433 21M14.856 3 22 15.004M14.857 3 5.575 21m12.857 0H5.575m12.857 0L22 15.004M5.575 21 2 15.004m20 0H2"
      />
    </Svg>
  );
};
const ForwardRef = forwardRef(SvgGoogleDrive);
export default ForwardRef;
