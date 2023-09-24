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
        stroke="currentColor"
        d="M3.06 5.655A.6.6 0 0 1 3.658 5h16.684a.6.6 0 0 1 .598.655l-1.176 12.8a.6.6 0 0 1-.597.545h-4.152a.6.6 0 0 1-.574-.424l-1.867-6.102c-.174-.566-.974-.566-1.148 0l-1.868 6.102a.6.6 0 0 1-.573.424H4.833a.6.6 0 0 1-.597-.545L3.643 12 3.06 5.655Z"
      />
      <Path
        stroke="currentColor"
        d="M4 9.5h1.5a2 2 0 0 0 2-2V5M20.5 9.5h-2a2 2 0 0 1-2-2V5"
      />
    </Svg>
  );
};
const ForwardRef = forwardRef(SvgShortPants);
export default ForwardRef;
