import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
import { Ref, forwardRef } from "react";
import { IconoirContext } from "./IconoirContext";
const SvgTreadmill = (passedProps: SvgProps, ref: Ref<Svg>) => {
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
        d="M13 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM10.613 7.267l-3.308 4.135 4.135 4.135-2.067 4.55"
      />
      <Path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m4.41 8.508 3.387-3.309 2.816 2.068 2.895 3.308h1.722M6.892 14.71l-1.241.827H2.343M3.343 21.537l15.308-2V8"
      />
      <Path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M20.892 6 18.65 8 17 9.5M20.891 21.71l-2.24-2.173"
      />
    </Svg>
  );
};
const ForwardRef = forwardRef(SvgTreadmill);
export default ForwardRef;
