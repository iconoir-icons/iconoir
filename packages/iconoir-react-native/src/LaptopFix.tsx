import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
import { Ref, forwardRef } from "react";
import { IconoirContext } from "./IconoirContext";
const SvgLaptopFix = (passedProps: SvgProps, ref: Ref<Svg>) => {
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
        d="M20.8 14.222H3.654a.6.6 0 0 0-.578.437L1.72 19.456A2 2 0 0 0 3.644 22h16.712a2 2 0 0 0 1.924-2.544l-1.48-5.234Zm0 0v-6.11M3.2 14.222V4a2 2 0 0 1 2-2H12M11 19h2M17.657 4.828l-2.829 2.829M20.485 4.828A2 2 0 1 1 17.657 2M14.828 10.485A2 2 0 0 0 12 7.657"
      />
    </Svg>
  );
};
const ForwardRef = forwardRef(SvgLaptopFix);
export default ForwardRef;
