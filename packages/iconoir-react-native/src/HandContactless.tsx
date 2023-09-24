import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
import { Ref, forwardRef } from "react";
import { IconoirContext } from "./IconoirContext";
const SvgHandContactless = (passedProps: SvgProps, ref: Ref<Svg>) => {
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
        d="m2 11 2.807-3.157A4 4 0 0 1 7.797 6.5H8M2 19.5h5.5l4-3s.81-.547 2-1.5c2.5-2 0-5.166-2.5-3.5C8.964 12.857 7 14 7 14"
      />
      <Path
        stroke="currentColor"
        d="M8 13.5V7a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-6.5"
      />
      <Path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M18.25 12c.5-1.5.5-2.5 0-4M16 9c.227.5.227 1.5 0 2"
      />
    </Svg>
  );
};
const ForwardRef = forwardRef(SvgHandContactless);
export default ForwardRef;
